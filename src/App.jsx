import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QUESTIONS } from './data/questions';
import { supabase } from './lib/supabase';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import StatPage from './pages/StatPage';

const ROUND_SIZE = 5;

function pickRandom(pool, count) {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

// ── QuizApp is defined at module level so React never remounts it
//    due to a new function reference on App re-render.
function QuizApp() {
  const [screen, setScreen]               = useState('start');
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQ, setCurrentQ]           = useState(0);
  const [correct, setCorrect]             = useState(0);
  const [wrong, setWrong]                 = useState(0);
  const [results, setResults]             = useState([]);

  function startGame() {
    setGameQuestions(pickRandom(QUESTIONS, ROUND_SIZE));
    setCurrentQ(0);
    setCorrect(0);
    setWrong(0);
    setResults([]);
    setScreen('game');
  }

  function handleAnswer(choice, isRight) {
    setCorrect(c => c + (isRight ? 1 : 0));
    setWrong(w => w + (isRight ? 0 : 1));
    setResults(r => [...r, isRight ? 'correct' : 'wrong']);
  }

  function handleNext() {
    const next = currentQ + 1;
    if (next < ROUND_SIZE) {
      setCurrentQ(next);
    } else {
      setScreen('end');
    }
  }

  async function saveResult({ faculty, studentId }) {
    const accuracy = Math.round((correct / ROUND_SIZE) * 100);

    // Build flat per-question columns from gameQuestions + results.
    // gameQuestions[i].type is the question category; results[i] is 'correct'|'wrong'.
    const qCols = {};
    for (let i = 0; i < gameQuestions.length; i++) {
      qCols[`q${i + 1}_type`]    = gameQuestions[i]?.type    ?? null;
      qCols[`q${i + 1}_correct`] = results[i] === 'correct';
    }

    const { data, error } = await supabase.from('quiz_results').insert({
      student_id: studentId || null,
      faculty:    faculty   || null,
      score:      correct,
      correct,
      wrong,
      accuracy,
      results,
      ...qCols,
    }).select('id').single();

    if (error) console.error('Supabase insert error:', error);
    return data?.id ?? null;
  }

  async function updateResult({ id, studentId, faculty }) {
    const { error } = await supabase
      .from('quiz_results')
      .update({
        ...(studentId && { student_id: studentId }),
        ...(faculty   && { faculty }),
      })
      .eq('id', id);
    if (error) console.error('Supabase update error:', error);
  }

  function restartGame() {
    setScreen('start');
  }

  return (
    <>
      {screen === 'start' && <StartScreen onStart={startGame} />}
      {screen === 'game' && (
        <GameScreen
          questions={gameQuestions}
          currentQ={currentQ}
          results={results}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      {screen === 'end' && (
        <EndScreen
          correct={correct}
          wrong={wrong}
          results={results}
          onSave={saveResult}
          onUpdate={updateResult}
          onRestart={restartGame}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/"     element={<QuizApp />} />
          <Route path="/stat" element={<StatPage />} />
        </Routes>
      </main>
    </>
  );
}

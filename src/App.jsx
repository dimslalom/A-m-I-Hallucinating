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

function QuizApp() {
  const [screen, setScreen]               = useState('start');
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQ, setCurrentQ]           = useState(0);
  const [correct, setCorrect]             = useState(0);
  const [wrong, setWrong]                 = useState(0);
  const [results, setResults]             = useState([]);
  const [questionTypes, setQuestionTypes] = useState([]);

  function startGame() {
    setGameQuestions(pickRandom(QUESTIONS, ROUND_SIZE));
    setCurrentQ(0);
    setCorrect(0);
    setWrong(0);
    setResults([]);
    setQuestionTypes([]);
    setScreen('game');
  }

  function handleAnswer(choice, isRight, type) {
    setCorrect(c => c + (isRight ? 1 : 0));
    setWrong(w => w + (isRight ? 0 : 1));
    setResults(r => [...r, isRight ? 'correct' : 'wrong']);
    setQuestionTypes(t => [...t, type]);
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
    const { data, error } = await supabase.from('quiz_results').insert({
      student_id: studentId || null,
      faculty: faculty || null,
      score: correct,
      correct,
      wrong,
      accuracy,
      results,
      question_types: questionTypes,
    }).select('id').single();
    if (error) console.error('Supabase insert error:', error);
    return data?.id ?? null;
  }

  async function updateResult({ id, studentId, faculty }) {
    const { error } = await supabase
      .from('quiz_results')
      .update({
        ...(studentId && { student_id: studentId }),
        ...(faculty  && { faculty }),
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
          <Route path="/" element={<QuizApp />} />
          <Route path="/stat" element={<StatPage />} />
        </Routes>
      </main>
    </>
  );
}

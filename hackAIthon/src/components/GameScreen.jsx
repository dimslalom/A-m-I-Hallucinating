import { useState, useEffect } from 'react';
import ExplanationBox from './ExplanationBox';
import TwitterCard from './content/TwitterCard';
import AbstractCard from './content/AbstractCard';
import ReferenceCard from './content/ReferenceCard';
import SlideCard from './content/SlideCard';

function ContentCard({ type, content }) {
  if (type === 'tweet')     return <TwitterCard   content={content} />;
  if (type === 'abstract')  return <AbstractCard  content={content} />;
  if (type === 'reference') return <ReferenceCard content={content} />;
  if (type === 'slide')     return <SlideCard     content={content} />;
  return null;
}

export default function GameScreen({ questions, currentQ, results, onAnswer, onNext }) {
  const [answered, setAnswered]       = useState(false);
  const [cardState, setCardState]     = useState({ A: '', B: '' });
  const [showExp, setShowExp]         = useState(false);
  const [showNext, setShowNext]       = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  useEffect(() => {
    setAnswered(false);
    setCardState({ A: '', B: '' });
    setShowExp(false);
    setShowNext(false);
  }, [currentQ]);

  const q = questions[currentQ];

  // Guard: questions might be empty on first render
  if (!q) return null;

  function handleAnswer(choice) {
    if (answered) return;
    setAnswered(true);

    const isRight  = choice === q.answer;
    const otherKey = choice === 'A' ? 'B' : 'A';

    setCardState({ [choice]: 'selecting', [otherKey]: '' });

    setTimeout(() => {
      setCardState({
        [choice]: isRight ? 'state-correct' : 'state-wrong',
        [otherKey]: 'state-neutral',
      });
      setLastCorrect(isRight);
      onAnswer(choice, isRight);

      setTimeout(() => {
        setShowExp(true);
        setTimeout(() => setShowNext(true), 400);
      }, 120);
    }, 220);
  }

  return (
    <div className="screen" id="screen-game">
      <div className="progress-bar">
        {Array.from({ length: questions.length }, (_, i) => {
          let cls = 'dot';
          if (i < results.length) cls += ' ' + results[i];
          else if (i === currentQ) cls += ' active';
          return <div key={i} className={cls} />;
        })}
      </div>

      <p className="q-label">Question {currentQ + 1} of {questions.length}</p>
      <p className="q-sublabel">{q.prompt}</p>

      <div className="comparison-wrap">
        {['A', 'B'].map(key => (
          <div key={key} className="card-option-group">
            <div className="card-option-badge">{key}</div>
            <div
              className={`card-option${cardState[key] ? ' ' + cardState[key] : ''}${answered ? ' disabled' : ''}`}
              onClick={() => handleAnswer(key)}
              role="button"
              tabIndex={answered ? -1 : 0}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleAnswer(key)}
            >
              <ContentCard type={q.type} content={key === 'A' ? q.optionA : q.optionB} />
            </div>
          </div>
        ))}
      </div>

      <ExplanationBox
        visible={showExp}
        isCorrect={lastCorrect}
        explanationText={q.explanation}
        showNext={showNext}
        onNext={onNext}
      />
    </div>
  );
}

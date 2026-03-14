export default function ExplanationBox({ visible, isCorrect, explanationText, showNext, onNext }) {
  return (
    <div className={`explanation-box${visible ? ' visible' : ''}`}>
      <div className={`exp-verdict${isCorrect ? ' v-correct' : ' v-wrong'}`}>
        {isCorrect ? '✓ Correct' : '✗ Wrong'}
      </div>
      <p className="exp-text">{explanationText}</p>
      <button
        className={`btn-next${showNext ? ' visible' : ''}`}
        onClick={onNext}
      >
        NEXT &nbsp;→
      </button>
    </div>
  );
}

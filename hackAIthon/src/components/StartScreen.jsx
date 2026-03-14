export default function StartScreen({ onStart }) {
  return (
    <div className="screen" id="screen-start">
      <h1 className="hero-title">A<em>(m)</em>I<br />Hallucinating?</h1>
      <p className="hero-sub">Test Your BS Detector &amp; Win Free Coffee ☕</p>
      <button className="btn-primary btn-start-big" onClick={onStart}>
        START
      </button>
    </div>
  );
}

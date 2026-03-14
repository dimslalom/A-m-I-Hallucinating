export default function SlideCard({ content }) {
  const { course, presenter, title, bullets, slideNum } = content;

  return (
    <div className="slide-card">
      <div className="slide-header">
        <span className="slide-course">{course}</span>
        <span className="slide-uq-mark">UQ</span>
      </div>
      <div className="slide-body">
        <div className="slide-title">{title}</div>
        <ul className="slide-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
      <div className="slide-footer">
        <span className="slide-presenter">{presenter}</span>
        <span className="slide-num">Slide {slideNum}</span>
      </div>
    </div>
  );
}

export default function AbstractCard({ content }) {
  const { journal, volume, title, authors, affiliation, abstract } = content;

  return (
    <div className="abs-card">
      <div className="abs-header">
        <div className="abs-journal">{journal}</div>
        <div className="abs-volume">{volume}</div>
      </div>
      <div className="abs-body">
        <h3 className="abs-title">{title}</h3>
        <p className="abs-authors">{authors}</p>
        {affiliation && <p className="abs-affiliation">{affiliation}</p>}
        <hr className="abs-divider" />
        <div className="abs-label">Abstract</div>
        <p className="abs-text">{abstract}</p>
      </div>
    </div>
  );
}

export default function ReferenceCard({ content }) {
  const { heading, citation } = content;

  return (
    <div className="ref-card">
      <div className="ref-heading">{heading}</div>
      <p className="ref-entry">{citation}</p>
    </div>
  );
}

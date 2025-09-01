import "./PaperDisplay.css";

const PaperDisplay = ({ papers }) => {
  // Use the 'papers' prop directly
  if (!papers || papers.length === 0) {
    return <p>No papers available for this subject.</p>;
  }

  return (
    <div className="paper-container">
      {papers.map((paper) => (
        <div className="paper-card" key={paper.id}>
          <div className="paper-header">
            {paper.department} – {paper.semester} {paper.month}_{paper.year}
          </div>
          <a className="download-btn" href={paper.file} download>
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default PaperDisplay;

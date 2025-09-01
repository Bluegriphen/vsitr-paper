import { useParams } from "react-router-dom";
import { usePaperContext } from "../../context/Papercontext";
import "./SubjectPage.css";

const SubjectPage = () => {
  const { department, semester, code } = useParams();
  const { getFilteredPapers } = usePaperContext();

  const papers = getFilteredPapers(department, semester, code);

  return (
    <div className="subject-page">
      <h2>{code} - Question Papers</h2>

      {papers.length > 0 ? (
        <div className="paper-list">
          {papers.map((paper, index) => (
            <div key={index} className="paper-card">
              <div className="paper-header">
                {paper.department} – {paper.semester} {paper.month} _
                {paper.year}
              </div>
              <a className="download-btn" href={paper.file} download>
                Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No papers available for this subject.</p>
      )}
    </div>
  );
};

export default SubjectPage;

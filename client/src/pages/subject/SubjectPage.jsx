import { useParams } from "react-router-dom";
import { useFirebase } from "../../context/Firebasecontext";
import "./SubjectPage.css";

const SubjectPage = () => {
  const { department, semester, code } = useParams();
  const { getFilteredPapers } = useFirebase();

  const papers = getFilteredPapers(department, semester, code);

  // Function to download PDF directly
  const downloadFile = (url, filename) => {
    if (!url) {
      console.error("No file URL provided");
      return;
    }

    // Convert GitHub URL to raw format if needed
    if (url.includes("github.com")) {
      url = url
        .replace("github.com", "raw.githubusercontent.com")
        .replace("/blob/", "/");
    }

    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((err) => console.error("Download failed:", err));
  };

  return (
    <div className="subject-page">
      <h2>{code} - Question Papers</h2>

      {papers.length > 0 ? (
        <div className="paper-list">
          {papers.map((paper, index) => (
            <div key={index} className="paper-card">
              <div className="paper-header">
                {paper.department} – Semester {paper.semester}, {paper.month}{" "}
                {paper.year}
              </div>
              <button
                className="download-btn"
                onClick={() =>
                  downloadFile(
                    paper.pdfLink,
                    `${paper.department}_${paper.semester}_${paper.code}_${paper.month}_${paper.year}.pdf`
                  )
                }
              >
                Download
              </button>
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

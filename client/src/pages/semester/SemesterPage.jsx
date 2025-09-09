import { useParams, Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebasecontext"; 
import "./SemesterPage.css";

const SemesterPage = () => {
  const { department, semester } = useParams();
  const { papers } = useFirebase(); 

  const semesterNum = parseInt(semester, 10);

  const getSubjects = () => {
    const subjects = papers
      .filter(
        (item) =>
          item.department === department &&
          parseInt(item.semester, 10) === semesterNum
      )
      .map((item) => ({
        code: item.code,
        subject: item.subject,
      }));

    // ✅ Ensure unique subjects by code
    const uniqueCodes = [
      ...new Map(subjects.map((item) => [item.code, item])).values(),
    ];

    return uniqueCodes;
  };

  const subjects = getSubjects();

  return (
    <div className="semester-container">
      <h2>
        {department} - Semester {semester}
      </h2>
      <h3>Select Your Subject</h3>
      <div className="subject-list">
        {subjects.length > 0 ? (
          subjects.map((item) => (
            <Link
              key={item.code}
              to={`/${department}/${semester}/${item.code}`}
              className="subject-link"
            >
              {item.code} – {item.subject}
            </Link>
          ))
        ) : (
          <p>No subjects found for this semester.</p>
        )}
      </div>
    </div>
  );
};

export default SemesterPage;

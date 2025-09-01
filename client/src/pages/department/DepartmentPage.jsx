import "./DepartmentPage.css";
import { Link, useParams } from "react-router-dom";
const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

const DepartmentPage = () => {
  const { department } = useParams();

  return (
    <div className="department-container">
      <h2>{department} Department</h2>
      <h3>Select Your Semester</h3>
      <div className="semester-list">
        {semesters.map((sem) => (
          <Link
            key={sem}
            to={`/${department}/${sem}`}
            className="semester-link"
          >
            Semester {sem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;

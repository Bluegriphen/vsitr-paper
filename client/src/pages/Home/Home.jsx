import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Select Your Department</h2>
      <div className="department-buttons">
        <Link to="/CE" className="department-btn">
          CE
        </Link>
        <Link to="/CSE" className="department-btn">
          CSE
        </Link>
        <Link to="/IT" className="department-btn">
          IT
        </Link>
      </div>
    </div>
  );
};

export default Home;

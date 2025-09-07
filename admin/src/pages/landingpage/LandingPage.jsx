import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">VSITR Paper Portal</h1>
      <p className="landing-desc">
        Students can download papers, professors can upload papers.
      </p>
      <div className="landing-actions">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

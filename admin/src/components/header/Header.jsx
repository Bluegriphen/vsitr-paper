import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useFirebase } from "../../context/FirebaseContext"; // adjust path to your Firebase context

const Header = () => {
  const { auth } = useFirebase();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        {/* 🔗 Logo links to Home */}
        <Link to="/home" className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <h1 className="header-title">VSITR | Question Paper</h1>
      </div>

      <nav className="header-nav">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;

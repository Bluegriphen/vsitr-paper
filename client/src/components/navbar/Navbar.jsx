import "./Navbar.css";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/** Left Section */}

      <Link to="/" className="nav-left">
        {" "}
        {/*  Wrap in Link */}
        <img src="/logo.png" alt="Logo" />
        <div className="title">VSITR | Question Paper</div>
      </Link>

      {/** Right Section */}
      <div className="nav-right">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;

/**import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DepartmentPage from "./pages/department/DepartmentPage";
import SemesterPage from "./pages/semester/SemesterPage";
import SubjectPage from "./pages/Subject/SubjectPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:department" element={<DepartmentPage />} />
          <Route path="/:department/:semester" element={<SemesterPage />} />
          <Route
            path="/:department/:semester/:subject"
            element={<SubjectPage />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
*/

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Department from "./pages/department/DepartmentPage";
import Semester from "./pages/semester/SemesterPage";
import Subject from "./pages/subject/SubjectPage";

import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:department" element={<Department />} />
          <Route path="/:department/:semester" element={<Semester />} />
          <Route path="/:department/:semester/:code" element={<Subject />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

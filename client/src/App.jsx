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

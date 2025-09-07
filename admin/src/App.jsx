import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddPaper from "./pages/addPaper/AddPapers";
import ManagePapers from "./pages/managePaper/ManagePaper";
import Settings from "./pages/settings/Settings";
import ManageAdmins from "./pages/manageAdmins/ManageAdmin";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingpage/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/papers/add" element={<AddPaper />} />
        <Route path="/admin/papers/manage" element={<ManagePapers />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/manage-admins" element={<ManageAdmins />} />
      </Routes>
    </div>
  );
};

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShield, FiMenu, FiX } from "react-icons/fi";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Toggle Button (only visible on mobile) */}
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">
            <FiShield className="admin-icon" /> Admin Panel
          </h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/admin/papers/manage" onClick={() => setIsOpen(false)}>
                Manage Papers
              </Link>
            </li>
            <li>
              <Link to="/admin/papers/add" onClick={() => setIsOpen(false)}>
                Add Papers
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-admins" onClick={() => setIsOpen(false)}>
                Manage Admins
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" onClick={() => setIsOpen(false)}>
                Settings
              </Link>
            </li>
            <li>
              <Link to="/admin/register" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

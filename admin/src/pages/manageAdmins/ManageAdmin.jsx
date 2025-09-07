import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Header from "../../components/header/Header";
import "./ManageAdmin.css";

const ManageAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchAdmins = async () => {
    try {
      const snapshot = await getDocs(collection(db, "admins"));
      setAdmins(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error("Error fetching admins:", err);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newAdminEmail) return;
    setLoading(true);
    setMessage("");
    try {
      await addDoc(collection(db, "admins"), {
        email: newAdminEmail,
        createdAt: new Date(),
      });
      setMessage("Admin added successfully!");
      setNewAdminEmail("");
      fetchAdmins();
    } catch (err) {
      console.error("Error adding admin:", err);
      setMessage("Failed to add admin.");
    }
    setLoading(false);
  };

  const handleDeleteAdmin = async (id) => {
    if (!window.confirm("Are you sure you want to remove this admin?")) return;
    try {
      await deleteDoc(doc(db, "admins", id));
      setAdmins(admins.filter((admin) => admin.id !== id));
    } catch (err) {
      console.error("Error deleting admin:", err);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="manage-admin-page">
      <Header />
      <div className="manage-admin-container">
        <h2>Manage Admins</h2>

        <form className="add-admin-form" onSubmit={handleAddAdmin}>
          <input
            type="email"
            placeholder="Enter admin email"
            value={newAdminEmail}
            onChange={(e) => setNewAdminEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Admin"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <ul className="admin-list">
          {admins.map((admin) => (
            <li key={admin.id} className="admin-item">
              <span>{admin.email}</span>
              <button onClick={() => handleDeleteAdmin(admin.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageAdmin;

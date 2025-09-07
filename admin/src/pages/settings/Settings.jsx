import { useState } from "react";
import { getAuth, updatePassword, updateEmail } from "firebase/auth";
import Header from "../../components/header/Header"; // ✅ Import Header
import "./Settings.css";

const Settings = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdateEmail = async () => {
    if (!newEmail) return setMessage("Please enter a new email.");
    try {
      await updateEmail(user, newEmail);
      setMessage("Email updated successfully!");
      setNewEmail("");
    } catch (error) {
      setMessage("Error updating email: " + error.message);
    }
  };

  const handleUpdatePassword = async () => {
    if (!newPassword) return setMessage("Please enter a new password.");
    try {
      await updatePassword(user, newPassword);
      setMessage("Password updated successfully!");
      setNewPassword("");
    } catch (error) {
      setMessage("Error updating password: " + error.message);
    }
  };

  return (
    <div className="settings-page">
      <Header /> {/* ✅ Added Header */}
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Profile</h3>
        <p>
          <strong>Current Email:</strong> {user?.email}
        </p>
      </div>
      <div className="settings-section">
        <h3>Update Email</h3>
        <input
          type="email"
          placeholder="Enter new email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={handleUpdateEmail}>Update Email</button>
      </div>
      <div className="settings-section">
        <h3>Update Password</h3>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
      {message && <p className="settings-message">{message}</p>}
    </div>
  );
};

export default Settings;

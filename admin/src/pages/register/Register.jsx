import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import "./Register.css";

const Register = () => {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "admins", user.uid), {
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      setSuccess("Registration successful!");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <div style={{ marginTop: "18px", textAlign: "center" }}>
        <Link to="/login" className="link">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Register;

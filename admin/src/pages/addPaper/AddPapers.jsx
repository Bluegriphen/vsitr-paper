import { useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import "./AddPapers.css";
import Header from "../../components/header/Header";

const AddPapers = () => {
  const { addPaper } = useFirebase();
  const [form, setForm] = useState({
    code: "",
    subject: "",
    month: "",
    department: "",
    year: "",
    semester: "",
    pdfLink: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    try {
      await addPaper(form);
      setSuccess("Paper added successfully!");
      setForm({
        code: "",
        subject: "",
        month: "",
        department: "",
        year: "",
        semester: "",
        pdfLink: "",
      });
    } catch {
      setError("Failed to add paper.");
    }
  };

  return (
    <div className="add-paper-page">
      <Header />
      <form className="add-paper-form" onSubmit={handleSubmit}>
        <h2>Add New Paper</h2>
        <input
          name="code"
          type="text"
          placeholder="Paper Code"
          value={form.code}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <input
          name="month"
          type="text"
          placeholder="Month"
          value={form.month}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          type="text"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          type="text"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
          required
        />
        <input
          name="semester"
          type="text"
          placeholder="Semester"
          value={form.semester}
          onChange={handleChange}
          required
        />
        <input
          name="pdfLink"
          type="text"
          placeholder="PDF GitHub Link"
          value={form.pdfLink}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Paper</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddPapers;

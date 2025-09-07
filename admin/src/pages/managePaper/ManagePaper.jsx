import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Header from "../../components/header/Header"; // ✅ Import Header
import "./ManagePaper.css";

const ManagePaper = () => {
  const [papers, setPapers] = useState([]);
  const [editingPaper, setEditingPaper] = useState(null);
  const [editData, setEditData] = useState({});

  // Fetch papers
  const fetchPapers = async () => {
    try {
      const snapshot = await getDocs(collection(db, "papers"));
      setPapers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error("Error fetching papers:", err);
    }
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  // Delete paper
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "papers", id));
      setPapers(papers.filter((paper) => paper.id !== id));
    } catch (err) {
      console.error("Error deleting paper:", err);
    }
  };

  // Start editing a paper
  const handleEdit = (paper) => {
    setEditingPaper(paper.id);
    setEditData({
      subject: paper.subject,
      code: paper.code,
      month: paper.month,
      year: paper.year,
      department: paper.department,
      semester: paper.semester,
      pdf_url: paper.pdf_url,
    });
  };

  // Handle edit input change
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save updated paper
  const handleUpdate = async (id) => {
    try {
      await updateDoc(doc(db, "papers", id), editData);
      setPapers(
        papers.map((paper) =>
          paper.id === id ? { ...paper, ...editData } : paper
        )
      );
      setEditingPaper(null);
    } catch (err) {
      console.error("Error updating paper:", err);
    }
  };

  return (
    <div className="manage-paper-page">
      <Header /> {/* ✅ Added Header here */}
      <div className="manage-paper">
        <h2>Manage Papers</h2>

        {papers.length > 0 ? (
          <ul className="paper-list">
            {papers.map((paper) => (
              <li key={paper.id} className="paper-item">
                {editingPaper === paper.id ? (
                  <div className="edit-form">
                    <input
                      type="text"
                      name="subject"
                      value={editData.subject}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="code"
                      value={editData.code}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="month"
                      value={editData.month}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="number"
                      name="year"
                      value={editData.year}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="department"
                      value={editData.department}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="semester"
                      value={editData.semester}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="url"
                      name="pdf_url"
                      value={editData.pdf_url}
                      onChange={handleChange}
                      required
                    />
                    <button onClick={() => handleUpdate(paper.id)}>Save</button>
                    <button onClick={() => setEditingPaper(null)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <span>
                      <strong>{paper.subject}</strong> ({paper.code}) -{" "}
                      {paper.month} {paper.year}
                    </span>
                    <a href={paper.pdf_url} target="_blank" rel="noreferrer">
                      View PDF
                    </a>
                    <button onClick={() => handleEdit(paper)}>Edit</button>
                    <button onClick={() => handleDelete(paper.id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No papers available.</p>
        )}
      </div>
    </div>
  );
};

export default ManagePaper;

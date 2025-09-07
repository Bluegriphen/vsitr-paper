import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./DashboardStats.css";

const DashboardStats = () => {
  const [admins, setAdmins] = useState([]);
  const [recentPapers, setRecentPapers] = useState([]);
  const [totalPapers, setTotalPapers] = useState(0);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const snapshot = await getDocs(collection(db, "admins"));
        setAdmins(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching admins:", err);
      }
    };

    const fetchRecentPapers = async () => {
      try {
        const papersQuery = query(
          collection(db, "papers"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const snapshot = await getDocs(papersQuery);
        setRecentPapers(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (err) {
        console.error("Error fetching recent papers:", err);
      }
    };

    const fetchTotalPapers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "papers"));
        setTotalPapers(snapshot.size);
      } catch (err) {
        console.error("Error fetching total papers:", err);
      }
    };

    fetchAdmins();
    fetchRecentPapers();
    fetchTotalPapers();
  }, []);

  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-title">Total Papers</div>
        <div className="stat-value">{totalPapers}</div>
      </div>
      <div className="stat-card">
        <div className="stat-title">Total Admins</div>
        <div className="stat-value">{admins.length}</div>
      </div>
      <div className="stat-card">
        <div className="stat-title">Departments</div>
        <div className="stat-value">8</div>
      </div>

      <div className="admin-list-card">
        <div className="stat-title" style={{ marginBottom: "10px" }}>
          Connected Admins
        </div>
        <ul className="admin-list">
          {admins.map((admin) => (
            <li key={admin.id}>{admin.email}</li>
          ))}
        </ul>
      </div>

      <div className="paper-list-card">
        <div className="stat-title" style={{ marginBottom: "10px" }}>
          Recent Paper Updates
        </div>
        {recentPapers.length > 0 ? (
          <ul className="paper-list">
            {recentPapers.map((paper) => (
              <li key={paper.id}>
                <strong>{paper.subject}</strong> ({paper.code}) - {paper.month}{" "}
                {paper.year}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-data">No recent papers found.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardStats;

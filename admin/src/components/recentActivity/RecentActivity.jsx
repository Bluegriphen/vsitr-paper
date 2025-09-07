import "./RecentActivity.css";

const activities = [
  {
    id: 1,
    action: "Added new paper",
    detail: "Blockchain-Technology (CT703D-N)",
    time: "2 mins ago",
  },
  {
    id: 2,
    action: "Updated admin",
    detail: "Admin: John Doe",
    time: "10 mins ago",
  },
  {
    id: 3,
    action: "Deleted paper",
    detail: "Data Structures (CS501A)",
    time: "1 hour ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h3 className="recent-activity-title">Recent Activity</h3>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <span className="activity-action">{activity.action}:</span>
            <span className="activity-detail">{activity.detail}</span>
            <span className="activity-time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import RecentActivity from "../../components/recentActivity/RecentActivity";
import DashboardStats from "../../components/dashboardStats/DashboardStats";
import "./Home.css";
const Home = () => {
  return (
    <div className="admin-layout">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <DashboardStats />
          <RecentActivity />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

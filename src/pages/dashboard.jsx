import '../css/dashboard.css'; // Import your CSS file for styling
function Dashboard() {
  return (
    <div className="dashboard-container">
       <div className="dashboard-container">
      <h1 className="dashboard-title">College Admin Dashboard</h1>

      {/* Statistic Cards */}
      <div className="stats-cards">
        <div className="card large-card">
          <h3>Total Students</h3>
          <p>1,450</p>
        </div>
        <div className="card large-card">
          <h3>Active Courses</h3>
          <p>72</p>
        </div>
        <div className="card large-card">
          <h3>Faculty Members</h3>
          <p>38</p>
        </div>
        <div className="card large-card">
          <h3>Departments</h3>
          <p>12</p>
        </div>
      </div>

      {/* Main Grid Sections */}
      <div className="dashboard-grid">
        {/* Recent Activity */}
        <div className="dashboard-section activity-section">
          <h2>Recent Activities</h2>
          <ul>
            <li>📝 New student registrations started</li>
            <li>📢 Annual Fest scheduled for Aug 15</li>
            <li>📚 Course "AI & ML" added in CS Department</li>
            <li>🏆 NSS team won 1st place in street play</li>
            <li>📅 Mid-term exams next week</li>
            <li>🎓 Convocation 2025 planning started</li>
          </ul>
        </div>

        {/* Announcements */}
        <div className="dashboard-section announcement-section">
          <h2>Announcements</h2>
          <ul>
            <li>Exam Hall tickets available from May 20</li>
            <li>Library timings updated: 9AM - 6PM</li>
            <li>NAAC inspection next month</li>
            <li>Submit assignment by 14th May</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="dashboard-section quick-links-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Manage Students</a></li>
            <li><a href="#">Manage Faculty</a></li>
            <li><a href="#">Course Details</a></li>
            <li><a href="#">Event Calendar</a></li>
            <li><a href="#">Exam Results</a></li>
          </ul>
        </div>

        {/* Chart Placeholder */}
        <div className="dashboard-section chart-section">
          <h2>Enrollment Chart</h2>
          <div className="fake-chart">📊</div>
        </div>
      </div>
    </div>
      </div>
  );
}
export default Dashboard;
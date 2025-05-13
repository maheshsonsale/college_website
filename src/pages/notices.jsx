import '../css/notice.css'
function Notices() {
  const notices = [
  { id: 1, title: "Exam Schedule", date: "May 10, 2025", description: "The mid-term exam schedule is now available. Please check your department's schedule." },
  { id: 2, title: "Sports Meet", date: "May 12, 2025", description: "The annual sports meet will be held on May 20, 2025. All students are encouraged to participate." },
  { id: 3, title: "NSS Camp", date: "May 15, 2025", description: "Students selected for the National Service Scheme camp need to report by May 20, 2025." },
  { id: 4, title: "Library Timings Update", date: "May 18, 2025", description: "The library will be open from 9 AM to 6 PM during the exam period." },
  { id: 5, title: "Convocation Ceremony", date: "May 25, 2025", description: "The convocation ceremony will take place on May 30, 2025. Graduates are requested to confirm their attendance." },
  { id: 6, title: "New Course Introduction", date: "May 22, 2025", description: "A new course on Data Science will be introduced in the upcoming semester. Register for it!" },
  // Add more notices as needed
];
  return (
    <div className="notices-container">
     <div className="notice-page-container">
      <h1 className="notice-page-title">College Notices</h1>

      <div className="notices-list">
        {notices.map((notice) => (
          <div className="notice-card" key={notice.id}>
            <div className="notice-header">
              <h2>{notice.title}</h2>
              <span className="notice-date">{notice.date}</span>
            </div>
            <p className="notice-description">{notice.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Notices;
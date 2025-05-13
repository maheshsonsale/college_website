import '../css/courses.css'; // Import your CSS file for styling
function Courses() {
  const courses = [
  { id: 1, name: "BCA (Computer Applications)", category: "Undergraduate", duration: "3 Years", icon: "💻" },
  { id: 2, name: "BBA (Business Administration)", category: "Undergraduate", duration: "3 Years", icon: "📊" },
  { id: 3, name: "B.Sc (Computer Science)", category: "Undergraduate", duration: "3 Years", icon: "🧠" },
  { id: 4, name: "MBA (Management)", category: "Postgraduate", duration: "2 Years", icon: "🏢" },
  { id: 5, name: "MCA (Computer Applications)", category: "Postgraduate", duration: "2 Years", icon: "🖥️" },
  { id: 6, name: "Diploma in Web Development", category: "Diploma", duration: "1 Year", icon: "🌐" },
  { id: 7, name: "Diploma in Graphic Design", category: "Diploma", duration: "1 Year", icon: "🎨" },
  { id: 8, name: "B.Ed (Education)", category: "Undergraduate", duration: "2 Years", icon: "📚" },
  { id: 9, name: "B.Com (Commerce)", category: "Undergraduate", duration: "3 Years", icon: "💼" },
  { id: 10, name: "M.Sc (Mathematics)", category: "Postgraduate", duration: "2 Years", icon: "📐" },
  { id: 11, name: "Certificate in Digital Marketing", category: "Certificate", duration: "6 Months", icon: "📱" },
  { id: 12, name: "PGDCA (Post Grad. Diploma in Comp. App.)", category: "Diploma", duration: "1 Year", icon: "🖱️" },
];

  return (
    <div className="courses-container">
 <section className="courses-section">
      <h2 className="section-title">Our Courses</h2>
      <p className="section-subtitle">Explore a wide range of academic and professional programs</p>

      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">{course.icon}</div>
            <h3 className="course-name">{course.name}</h3>
            <p className="course-category">{course.category}</p>
            <p className="course-duration">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
export default Courses;
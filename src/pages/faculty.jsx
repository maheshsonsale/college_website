import '../css/faculty.css'; // Import your CSS file for styling
import image1 from '../assets/facultyimages/1.jpg'
import image2 from '../assets/facultyimages/2.jpg'
import image3 from '../assets/facultyimages/3.jpg'
import image4 from '../assets/facultyimages/4.jpg'
import image5 from '../assets/facultyimages/5.jpg'

import image6 from '../assets/facultyimages/6.jpg'
import image7 from '../assets/facultyimages/7.jpg'
import image8 from '../assets/facultyimages/8.jpg'
import image9 from '../assets/facultyimages/9.jpg'
import image10 from '../assets/facultyimages/10.jpg'
import image11 from '../assets/facultyimages/11.jpg'
import image12 from '../assets/facultyimages/12.jpg'
import image13 from '../assets/facultyimages/13.jpg'
import image14 from '../assets/facultyimages/14.jpg'
import image15 from '../assets/facultyimages/15.jpg'
import image16 from '../assets/facultyimages/16.jpg'
import image17 from '../assets/facultyimages/17.jpg'
import image18 from '../assets/facultyimages/18.jpg'
import image19 from '../assets/facultyimages/19.jpg'
import image20 from '../assets/facultyimages/20.jpg'
function Faculty() {

  // Sample data for faculty members
  const facultyData = [
    { id: 1, name: "Dr. Anil Sharma", position: "Professor", dept: "Computer Science", image: image1 },
    { id: 2, name: "Prof. Sunita Rao", position: "Assistant Professor", dept: "Mathematics", image: image2 },
    { id: 3, name: "Dr. Rakesh Verma", position: "HOD", dept: "Physics", image: image3 },
    { id: 4, name: "Ms. Neha Jain", position: "Lecturer", dept: "English", image: image4 },
    { id: 5, name: "Mr. Praveen Kumar", position: "Assistant Professor", dept: "Management", image: image5 },
    { id: 6, name: "Dr. Alka Mehta", position: "Associate Professor", dept: "Biology", image: image6 },
    { id: 7, name: "Mr. Nikhil Singh", position: "Lecturer", dept: "Commerce", image: image7 },
    { id: 8, name: "Ms. Anjali Mishra", position: "Professor", dept: "History", image: image8 },
    { id: 9, name: "Dr. Yogesh Tiwari", position: "Lecturer", dept: "Chemistry", image: image9 },
    { id: 10, name: "Prof. Swati Gupta", position: "HOD", dept: "Economics", image: image10 },
    { id: 11, name: "Mr. Harish Joshi", position: "Lecturer", dept: "Political Science", image: image11 },
    { id: 12, name: "Ms. Ritu Chauhan", position: "Lecturer", dept: "Psychology", image: image12 },
    { id: 13, name: "Dr. Ramesh Dubey", position: "Associate Professor", dept: "Philosophy", image: image13 },
    { id: 14, name: "Mr. Akash Patel", position: "Lecturer", dept: "Geography", image: image14 },
    { id: 15, name: "Dr. Sneha Kulkarni", position: "Professor", dept: "Zoology", image: image15 },
    { id: 16, name: "Ms. Priya Deshmukh", position: "Assistant Professor", dept: "Sociology", image: image16 },
    { id: 17, name: "Mr. Arvind Nayak", position: "Lecturer", dept: "Hindi", image: image17 },
    { id: 18, name: "Dr. Seema Rathore", position: "Professor", dept: "Education", image: image18 },
    { id: 19, name: "Prof. Devansh Bhatt", position: "Assistant Professor", dept: "Computer Science", image: image19 },
    { id: 20, name: "Ms. Kavita Sharma", position: "Lecturer", dept: "Environmental Studies", image: image20 },
    // Additional faculty members
  ];

  return (
    <div className="faculty-container">
      <section className="faculty-section">
        <h2 className="faculty-title">Meet Our Faculty</h2>
        <p className="faculty-subtitle">Experienced educators from various disciplines</p>

        <div className="faculty-grid">
          {facultyData.map(faculty => (
            <div className="faculty-card" key={faculty.id}>
              <img src={faculty.image} alt={faculty.name} className="faculty-image" />
              <h3 className="faculty-name">{faculty.name}</h3>
              <p className="faculty-position">{faculty.position}</p>
              <p className="faculty-dept">{faculty.dept}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Faculty;
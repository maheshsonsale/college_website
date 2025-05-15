import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'; // Import your CSS file for styling
import mapimage from '../assets/map.jpeg'; // Import your map image
import AOS from 'aos';
import 'aos/dist/aos.css';


import image1 from '../assets/sliderimages/1.jpg';
import image2 from '../assets/sliderimages/2.jpg';
import image3 from '../assets/sliderimages/3.jpg';
import image4 from '../assets/sliderimages/4.jpg';
import image5 from '../assets/sliderimages/5.jpg';
import image6 from '../assets/sliderimages/6.jpg';

// company logos
import tcs from "../assets/companylogos/tcs.png"
import infosis from "../assets/companylogos/info.png"
import wipro from "../assets/companylogos/wipro.png"
import cognizant from "../assets/companylogos/cognizant.png"
function Home() {
  // map section
  // const [selectedPlace, setSelectedPlace] = useState(null);
  // popup box section
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  const popuphandler = () => {
    setIsVisible(false);
  };
  // placement section data
  const recruiters = [
    { name: "TCS", logo: tcs },
    { name: "Infosys", logo: infosis },
    { name: "Wipro", logo: wipro },
    { name: "Cognizant", logo: cognizant },
  ];


  const handleSubmit = () => {
    if (!name || !mobile || !city) {
      alert("Please fill all fields.");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }
    alert("Enquiry Submitted Successfully!");
    setName('');
    setMobile('');
    setCity('');
    setIsVisible(false);
  };
  // why choose us animation Aos
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  //image slider

  const images = [image1, image2, image3, image4, image5, image6];

  const [current, setCurrent] = useState(0);
  const length = images.length;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2000);
    return () => clearInterval(timer);
  }, [length]);


  return (<>
    <div className="slider-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          <img src={img} alt={`Slide ${index}`} className='sliderImage' />
        </div>
      ))}

    </div>
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="news-sliding">
          <div className="news-content">
            <span className="marquee-text">
              🎓 Admissions Open for 2025 | 📢 Seminar on AI - 20th May | 🏆 Sports Meet Results Announced! |
              🧪 Workshop on Data Science - 25th May | 📝 Mid-Term Exam Schedule Released |
              📚 Library New Arrivals: May Edition | 🏫 Campus Placement Drive - 28th May |
              🌐 Online Fee Payment Deadline - 30th May | 🧾 Annual Magazine Submissions Open!
            </span>
          </div>
        </div>

        <h1>Welcome to Swami Vivekananda Vishwavidyalaya</h1>
        <p>Empowering Youth through Knowledge, Discipline, and Innovation</p>
        <button className="explore-btn hero-btn" data-aos="fade-right"><Link to='/courses'> Explore Courses</Link></button>
        <button className="login-btn hero-btn" data-aos="fade-left"><Link to='/login'>Student Login</Link></button>
      </section>

      {/* About Section */}
      <div className="about-container">
        {/* displaying massage of sliding */}
        <section className="message-container" data-aos="fade-right">
          <h2 className='h2'>Message from the Chancellor</h2>
          <div className="marquee-wrapper">
            <div className="marquee-box">
              <p>"Education is the manifestation of the perfection already within you."</p>
              <p>"Education is the manifestation of the perfection already within you."</p>
              <p>"Education is the manifestation of the perfection already within you."</p>
              <p>"Education is the manifestation of the perfection already within you."</p>
              <p>"Education is the manifestation of the perfection already within you."</p>
              <p>"Education is the manifestation of the perfection already within you."</p>
            </div>
          </div>
        </section>
        <section className="about" data-aos="fade-left">
          <h2 className='h2'>About the University</h2>
          <p>
            Swami Vivekananda Vishwavidyalaya is committed to providing quality education
            that blends academic excellence with spiritual and cultural values.
            Inspired by the ideals of Swami Vivekananda, we aim to shape responsible citizens and future leaders.
          </p>
        </section>

      </div>
      {/* Features Section */}
      <section className="features">
        <h2 className='h2' data-aos="fade-down">Why Choose Us?</h2>
        <ul>
          <li data-aos="fade-right" data-aos-delay="0">📘 Wide Range of UG & PG Courses</li>
          <li data-aos="fade-left" data-aos-delay="100">🏛 Modern Campus with Digital Classrooms</li>
          <li data-aos="fade-left" data-aos-delay="200">🧠 Experienced & Supportive Faculty</li>
          <li data-aos="fade-up-right" data-aos-delay="300">💼 Career Guidance & Placement Support</li>
          <li data-aos="fade-up-left" data-aos-delay="400">🌍 Focus on Skill Development & Research</li>
        </ul>
      </section>

      {/* map section */}
      <div style={{ textAlign: 'center', padding: '20px' }} className="map-section" data-aos="zoom-in-up">
        <h1 id='map-heading'>Swami Vivekananda Vishwavidyalaya Campus Map</h1>
        <div className="map-container">
          <img
            src={mapimage}
            alt="Campus Map"
            className="map-image"
          />

        </div>

      </div>


      {/* News Section */}

      <section className="placement-cell">
        <div className="placement-header">
          <h2>Placement Cell</h2>
          <p>
            Our dedicated Placement Cell connects students with top recruiters and prepares them with
            the skills and confidence they need to succeed in the corporate world. We ensure students
            are equipped with resume building, mock interviews, aptitude training, and soft skills.
          </p>
        </div>

        <div className="placement-grid">
          <div>
            <h3>Our Mission</h3>
            <p>
              To empower students with the necessary resources, training, and opportunities to achieve
              their career goals and foster relationships with industry leaders.
            </p>
          </div>
          <div>
            <h3>Services Offered</h3>
            <ul>
              <li>Resume building & interview preparation</li>
              <li>Technical and aptitude training sessions</li>
              <li>Industry expert seminars and webinars</li>
              <li>On-campus and virtual placement drives</li>
              <li>Internship and job opportunity support</li>
            </ul>
          </div>
        </div>

        <div className="recruiters-section">
          <h3>Top Recruiters</h3>
          <div className="recruiters">
            {recruiters.map((rec, idx) => (
              <div key={idx} className="recruiter-card">
                <img src={rec.logo} alt={rec.name} />
                <p>{rec.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats">
          <div className="stat-card blue">
            <h4>500+</h4>
            <p>Students Placed</p>
          </div>
          <div className="stat-card green">
            <h4>100+</h4>
            <p>Recruiters Visited</p>
          </div>
          <div className="stat-card yellow">
            <h4>12 LPA</h4>
            <p>Highest Package</p>
          </div>
        </div>
      </section>


      {/* Popup Box Section */}
      {/* Popup Box Section */}
      {isVisible && (
        <section className="popup">
          <div className="popup-box">
            <button className="popup-close" onClick={popuphandler}>×</button>
            <h2 className="popup-title">Quick Enquiry</h2>
            <input
              className="popup-input"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="popup-input"
              type="text"
              placeholder="Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              className="popup-input"
              type="text"
              placeholder="City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="popup-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </section>
      )}

    </div >

  </>
  );
}
export default Home;
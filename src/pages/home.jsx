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
        <button className="explore-btn hero-btn"><Link to='/courses'> Explore Courses</Link></button>
        <button className="login-btn hero-btn"><Link to='/login'>Student Login</Link></button>
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
      <section className="news">
        <h2 className='h2'>Latest News & Events</h2>
        <ul>
          <li>📢 Admissions Open for 2025 Batch</li>
          <li>🏆 NSS Team won 1st Prize at State-Level Camp</li>
          <li>🎓 Convocation Ceremony on 20th July 2025</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className='h2'>Contact Us</h2>
        <p>📍 159 Swarn Bagh Colony, Indore (M.P)</p>
        <p>📞 9039418742</p>
        <p>📧 maheshsonsale159@gmail.com</p>
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
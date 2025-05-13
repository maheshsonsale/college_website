import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'; // Import your CSS file for styling
import mapimage from '../assets/map.jpeg'; // Import your map image

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
  function popuphandler() {
    setIsVisible(false);
  }
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
        <h1>Welcome to Swami Vivekananda Vishwavidyalaya</h1>
        <p>Empowering Youth through Knowledge, Discipline, and Innovation</p>
        <button className="explore-btn hero-btn"><Link to='/courses'> Explore Courses</Link></button>
        <button className="login-btn hero-btn"><Link to='/login'>Student Login</Link></button>
      </section>

      {/* About Section */}
      <div className="about-container">
        {/* displaying massage of sliding */}
        <section className="message-container">
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
        <section className="about">
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
        <h2 className='h2'>Why Choose Us?</h2>
        <ul>
          <li>📘 Wide Range of UG & PG Courses</li>
          <li>🏛 Modern Campus with Digital Classrooms</li>
          <li>🧠 Experienced & Supportive Faculty</li>
          <li>💼 Career Guidance & Placement Support</li>
          <li>🌍 Focus on Skill Development & Research</li>
        </ul>
      </section>
      {/* map section */}
      <div style={{ textAlign: 'center', padding: '20px' }} className="map-section">
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

      {/* popup box section */}
      <section className="popup" style={{ display: isVisible ? 'flex' : 'none' }}>
        <h2 className='h2'>Welcome to Swami Vivekananda  group of institute</h2>
        <p className='p'>Latest News are .</p>
        <button className="pop-log-btn" onClick={popuphandler}>Exit</button>
      </section>

    </div >

  </>
  );
}
export default Home;
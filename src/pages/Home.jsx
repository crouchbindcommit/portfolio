import React from "react";
import './Home.css'; // Import the updated Home.css
import faceImage from '../assets/me/face.png'; // Import the image from src/assets
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Business Card Container */}
      <div className="card-container">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={faceImage} alt="Profile" />
        </div>

        {/* Text Content */}
        <div className="card-content">
          {/* Tagline */}
          <div className="tagline">
            <span className="hi">Hi,</span> <span className="im">I’m</span>
            <br className="small-gap"/>
            <span className="mak">Mak!</span><br />
            <br className="small-gap"/>
            <span className="build-things">I build things.</span>
          </div>

          {/* Button for Call to Action */}
          <Link to="/projects">
          <button className="see-work-btn">See My Work</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

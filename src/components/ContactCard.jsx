import React from 'react';
import './ContactCard.css'; // Import the CSS for styling

const ContactCard = ({ email, socialLinks, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div className="contact-card-container">
      {/* Social Cards - Only Social links excluding email */}
      {socialLinks.map((link, index) => (
        <div 
          key={index} 
          className="social-card" 
          onMouseEnter={handleMouseEnter} // Trigger smile on hover
          onMouseLeave={handleMouseLeave} // Remove smile when hover ends
        >
          <div className="social-card-header">
            <i className={link.iconClass}></i>
            <h3>{link.name}</h3>
          </div>
          <p className="card-description">Check out my {link.name} profile</p>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="go-button">
            Visit {link.name}
          </a>
        </div>
      ))}

      {/* Email Card */}
      <div
        className="social-card"
        onMouseEnter={handleMouseEnter} // Trigger smile on hover for the email card
        onMouseLeave={handleMouseLeave} // Remove smile when hover ends for the email card
      >
        <div className="social-card-header">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
        </div>
        <p className="card-description">Send me an email directly</p>
        <a href={`mailto:${email}`} className="go-button">
          Open Email
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

import React, { useState } from 'react';
import Creature from '../components/Creature'; // Import the Creature component
import ContactCard from '../components/ContactCard'; // Import the ContactCard component
import './Contact.css';

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Handle mouse enter/leave to set the smile effect
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      iconClass: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/makayla-g-mckinney/',
    },
    {
      name: 'GitHub',
      iconClass: 'fab fa-github',
      url: 'https://github.com/crouchbindcommit',
    },
  ];

  const email = 'mmckin22@gmail.com';

  return (
    <div className="contact-page">
      {/* Creature component */}
      <Creature isHovering={isHovering} /> {/* Pass the hover state to Creature */}

    {/* Banner */}
      <div className="contact-banner">
        <h2>Let's get in touch!</h2>
      </div>

      {/* Render the ContactCard with social links */}
      <div className="social-cards">
        {/* Pass handleMouseEnter and handleMouseLeave to ContactCard */}
        <ContactCard 
          email={email} 
          socialLinks={socialLinks} 
          handleMouseEnter={handleMouseEnter} 
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Contact;

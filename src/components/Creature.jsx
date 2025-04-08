import React, { useEffect } from 'react';
import './Creature.css'; // Ensure the CSS file is correctly imported

const Creature = ({ isHovering }) => {
  
  useEffect(() => {
    const eyes = document.querySelectorAll('.eye');
    
    const handleMouseMove = (event) => {
      const { clientX: mouseX, clientY: mouseY } = event;

      eyes.forEach((eye) => {
        const { top, left, width, height } = eye.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = Math.min(10, Math.hypot(mouseX - centerX, mouseY - centerY));

        const eyeMovementX = Math.cos(angle) * distance;
        const eyeMovementY = Math.sin(angle) * distance;

        eye.style.transform = `translate(${eyeMovementX}px, ${eyeMovementY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`creature ${isHovering ? 'smiling' : ''}`}>
      <div className="creature-eyes">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
      </div>
      <div className={`creature-mouth ${isHovering ? 'smile' : ''}`}></div> {/* Mouth element */}
    </div>
  );
};

export default Creature;

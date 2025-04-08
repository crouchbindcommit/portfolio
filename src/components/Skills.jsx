import React from 'react';
import skillsData from '../data/skills'; // Import your skills data
import './Skills.css'; // Optional: for additional styling

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-list">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.category}</h3>
            <ul className="skills">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

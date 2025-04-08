import React from 'react';
import educationData from '../data/education'; // Import the education data
import './Education.css'

const Education = () => {
  return (
    <div className="education-container">
              <h2 className="education-heading">My Education</h2>
      {educationData.map((education, index) => (
        <div key={index} className="education-card">
          <h3>{education.degree} in {education.major}</h3>
          <h5>{education.institution}</h5>
          <p>{education.startDate} - {education.endDate}</p>
          
          <h4>Relevant Coursework:</h4>
          <ul>
            {education.relevantCoursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;

import React from 'react';
import './Extracurriculars.css'; // Optional: for styling
import extracurricularData from '../data/extracurricular'; // Import your extracurricular data

const Extracurriculars = () => {
  return (
    <div className="extracurriculars-container">
      <h2 className="extracurriculars-heading">Leadership & Extracurricular Activities</h2>
      <div className="extracurriculars-list">
        {extracurricularData.map((activity, index) => (
          <div key={index} className="extracurricular-item">
            <div className="extracurricular-date">
              <span>{activity.startDate} - {activity.endDate}</span>
            </div>
            <div className="extracurricular-content">
              <h3>{activity.title}</h3>
              <h4>{activity.organization}</h4>
              <p>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurriculars;

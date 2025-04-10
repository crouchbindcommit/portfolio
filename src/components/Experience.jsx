import React, { useState } from 'react';
import './Experience.css';
import experienceData from '../data/experience';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experience) => {
        setSelectedExperience(experience);
    };

    const closeModal = () => {
        setSelectedExperience(null);
    };

    return (
        <div className="timeline-container">
            <h2 className="cv-heading">Experience</h2>
            {experienceData.map((experience, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-line"></div>

                    <div className="timeline-dates">
                        <span>{experience.startDate} to {experience.endDate}</span>
                    </div>

                    <div className="timeline-content">
                        <h3>{experience.title}</h3>
                        <p><strong>{experience.company}</strong></p>
                        <button className="details-button" onClick={() => openModal(experience)}>
                            See Details
                        </button>
                    </div>
                </div>
            ))}

            {selectedExperience && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedExperience.title}</h3>
                        <p><strong>{selectedExperience.company}</strong></p>
                        <div dangerouslySetInnerHTML={{ __html: selectedExperience.description }} />

                        {/* Document Buttons (if any) */}
                        {selectedExperience.documents && selectedExperience.documents.length > 0 && (
                            <div className="document-links">
                                <h4>Related Resources:</h4>
                                {selectedExperience.documents.map((doc, index) => (
                                    <a
                                        key={index}
                                        href={
                                            doc.link.startsWith('http') || doc.link.startsWith('/')
                                                ? doc.link
                                                : `https://${doc.link}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="document-button"
                                    >
                                        {
                                            doc.type === 'website'
                                                ? 'Visit Website'
                                                : doc.type === 'Portfolio'
                                                    ? 'View Portfolio'
                                                    : doc.type === 'CAD'
                                                        ? 'View CAD Samples'
                                                        : `View ${doc.type}`
                                        }
                                    </a>
                                ))}
                            </div>
                        )}

                        <button className="close-button" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;

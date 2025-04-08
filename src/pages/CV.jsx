import React from 'react';
import Experience from '../components/Experience'; // Import the Experience component
import Skills from '../components/Skills'; // Import the Skills component
import Education from '../components/Education'; // Import the Education component
import Extracurricular from '../components/Extracurriculars'; // Import the Extracurricular component
import './CV.css'; // Optional: for additional styling

const CV = () => {
    return (
        <div className="cv-container">
            <div className="cv-content">
                {/* Left Column: Experience */}
                <div className="timeline-column">
                    <Experience />
                </div>

                {/* Right Column: Skills + Education */}
                <div className="details-column">
                    <section className="cv-section">
                        <Skills />
                    </section>

                    <section className="cv-section">
                        <Education />
                    </section>

                    <a
                        className="cv-button"
                        href="/Makayla-Mckinney-Resume.pdf"
                        target="__blank"
                    >
                        See my Full CV
                    </a>


                </div>
            </div>

            {/* Full-width row: Extracurriculars */}
            <div className="cv-bottom">
                <section className="cv-section">
                    <Extracurricular />
                </section>
            </div>
        </div>

    );
};

export default CV;

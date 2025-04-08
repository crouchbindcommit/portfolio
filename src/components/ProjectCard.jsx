import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // State to track the screen width
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  // Hook to handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Set the state based on screen width
    };

    window.addEventListener('resize', handleResize); // Listen for resize event

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="project-card">
      <div className="project-card-inner">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-content">
          <h2 className="project-title">{project.title}</h2>
          {isLargeScreen && (<p className="project-description">{project.shortDescription}</p>)}

          {/* Conditionally render the tags if screen is large enough */}
          {isLargeScreen && (
            <div className="project-tags">
              {project.skills.slice(0, 2).map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>

          )}

          {/* The Learn More button is always visible */}
          <Link to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`} className="project-button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

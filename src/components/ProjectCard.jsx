import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="project-card">
      <div className="project-card-inner">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-content">
          <h2 className="project-title">{project.title}</h2>
          {isLargeScreen && (
            <p className="project-description">{project.shortDescription}</p>
          )}

          {/* Removed skills/tags display */}

          <Link
            to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
            className="project-button"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

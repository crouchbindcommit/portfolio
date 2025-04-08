import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData'; // Import project data
import { Link } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
    const { projectName } = useParams(); // Get project name from URL

    const project = projectsData.find((p) => p.title.replace(/\s+/g, '-').toLowerCase() === projectName);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail-container">

            <article className="project-detail">
                {/* Project Header */}
                <header className="project-header">
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-summary">{project.shortDescription}</p>
                </header>

                {/* Project Links */}
                <section className="project-links">
                    {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            View Live Demo
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            View GitHub Repository
                        </a>
                    )}
                </section>

                {/* Documents Buttons */}
                <section className="project-links">
                    {project.documents.map((doc, index) => (
                        doc.url && (
                            <a
                                key={index}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="document-button"
                            >
                                {doc.name || `Document ${index + 1}`}
                            </a>
                        )
                    ))}
                </section>

                {/* Tech Stack */}
                <section className="tech-stack">
                    <h3>Relevant Skills:</h3>
                    <ul>
                        {project.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section>

                {/* Project Content */}
                <section className="project-description">
                    <div className="project-main-content" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                </section>
                          <Link to="/projects">
                          <button className="see-work-btn">Return to Projects</button>
                            </Link>
            </article>
        </div>
    );
}

export default ProjectDetail;

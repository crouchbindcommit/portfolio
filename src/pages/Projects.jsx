import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ProjectCard from '../components/ProjectCard'; // Adjust the path accordingly
import projectsData from '../data/projectsData'; // Import your projects data
import './Projects.css'; 

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter projects based on the search query
  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) || // Search by name
      project.longDescription.toLowerCase().includes(query) || // Search by description
      project.skills.some((skill) => skill.toLowerCase().includes(query)) // Search by skills
    );
  });

  return (
    <div className="portfolio-container">
      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input-container">
          <i className="mdi mdi-magnify search-icon"></i> {/* MDI search icon */}
          <input
            type="text"
            placeholder="Search projects by name, description, or skills"
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      {/* Render filtered project cards */}
      {filteredProjects.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredProjects.map((project, index) => (
          <Link 
            key={index} 
            to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`} // Link to the project detail page
            className="project-card-link" // Optional: Add a class for styling the link
          >
            <ProjectCard project={project} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Projects;

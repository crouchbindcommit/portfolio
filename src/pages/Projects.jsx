import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    rubberband: false,
    mode: 'free-snap',
    slides: { origin: 'center', perView: 1, spacing: 20 },
  });

  useEffect(() => {
    if (viewMode === 'carousel' && slider) {
      clearInterval(timerRef.current);
      if (!isHovered) {
        timerRef.current = setInterval(() => {
          slider.current?.next();
        }, 3000);
      }
    }
    return () => clearInterval(timerRef.current);
  }, [viewMode, slider, isHovered]);

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchQuery) ||
    project.longDescription.toLowerCase().includes(searchQuery) ||
    project.skills.some((skill) => skill.toLowerCase().includes(searchQuery))
  );

  return (
    <div className="w-full">
      <div className="portfolio-container relative flex flex-col items-center">
        {/* View Toggle Buttons */}
        <div className="flex justify-center gap-4 my-4">
          {['grid', 'list', 'carousel'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`view-toggle-button ${viewMode === mode ? 'active' : ''}`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-bar w-full max-w-3xl mb-6">
          <div className="search-input-container">
            <i className="mdi mdi-magnify search-icon"></i>
            <input
              type="text"
              placeholder="Search projects by name, description, or skills"
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 ? (
          <div className="w-full text-center">
            <p>No results found</p>
          </div>
        ) : viewMode === 'carousel' ? (
          // Carousel View
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="carousel-container"
            ref={sliderRef}
          >
            <button
              onClick={() => slider.current?.prev()}
              className="carousel-arrow absolute left-4 top-1/2 transform -translate-y-1/2 z-10 px-3 py-2 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="carousel-arrow absolute right-4 top-1/2 transform -translate-y-1/2 z-10 px-3 py-2 rounded-full shadow"
            >
              ›
            </button>

            {filteredProjects.map((project, index) => {
              const link = `/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <div key={index} className="keen-slider__slide carousel-item">
                  <Link to={link} className="carousel-card">
                    <div className="carousel-content">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-2/3 w-auto object-contain mb-4"
                      />
                      <h3 className="text-xl font-bold text-blue-700 font-creepster text-center">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : viewMode === 'list' ? (
          // List View
          filteredProjects.map((project, index) => {
            const link = `/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`;
            return (
              <div key={index} className="list-card w-full max-w-4xl mb-6">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.shortDescription}</p>
                <Link to={link} className="project-button w-max">
                  Learn More
                </Link>
              </div>
            );
          })
        ) : (
          // Grid View with 50vw Cards
          <div className="project-grid-wrap">
            {filteredProjects.map((project, index) => {
              const link = `/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <Link key={index} to={link} className="project-card-link">
                  <div className="project-card">
                    <ProjectCard project={project} />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

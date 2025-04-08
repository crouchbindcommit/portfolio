import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // Determine active link based on current path
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/projects')) return 'portfolio';
    if (path.startsWith('/cv')) return 'cv';
    if (path.startsWith('/contact')) return 'contact';
    return '';
  };

  const activeLink = getActiveLink();

  useEffect(() => {
    const updateHighlightPosition = () => {
      const activeLinkElement = document.querySelector(`.navbar-link.active`);
      if (activeLinkElement) {
        const { left, width } = activeLinkElement.getBoundingClientRect();
        setHighlightStyle({ left, width });
      }
    };

    updateHighlightPosition();
    window.addEventListener('resize', updateHighlightPosition);
    return () => window.removeEventListener('resize', updateHighlightPosition);
  }, [activeLink]);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/cv" className={`navbar-link ${activeLink === 'cv' ? 'active' : ''}`}>
            CV
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Highlight Slider */}
      <div
        className="navbar-highlight"
        style={{
          left: `${highlightStyle.left}px`,
          width: `${highlightStyle.width}px`,
        }}
      />
    </nav>
  );
};

export default Navbar;

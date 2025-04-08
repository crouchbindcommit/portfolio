import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home'; // Import Home page
import Portfolio from './pages/Projects'; // Import Portfolio page
import Contact from './pages/Contact'; // Import Contact page
import CV from './pages/CV'; // Import CV page
import ProjectDetail from './pages/ProjectDetail';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/projects" element={<Portfolio />} /> {/* Portfolio route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/cv" element={<CV />} /> {/* CV route */}
        <Route path="/projects/:projectName" element={<ProjectDetail />} />

      </Routes>
    </Router>
  );
};

export default App;

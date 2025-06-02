import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo"></div>

      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="nav">
        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="about" onClick={toggleNav}>About</a></li>
          <li><a href="skills" onClick={toggleNav}>Skills</a></li>
          <li><a href="projects" onClick={toggleNav}>Projects</a></li>
          <li><a href="contact" onClick={toggleNav}>Contact</a></li>
          <li><a href="Benson_Kamau_Resume.pdf" onClick={toggleNav}>my resume</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;


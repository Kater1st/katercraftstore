import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.webp';
import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <h2>KaterCraft</h2>
        <img src={Logo} id="head-logo" alt="Logo" />
      </a>
      <nav>
        <ul className="nav">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/features" className="nav-link">Features</a></li>
          <li><a href="/pricing" className="nav-link">Pricing</a></li>
          <li><a href="/contact" className="nav-link">Contact Us</a></li>
        </ul>
      </nav>
      <div>
        <a href="/login" className="btn btn-outline-primary me-2">Login</a>
        <a href="/signup" className="btn btn-primary">Sign-up</a>
        <button id="dark-mode-toggle" className="btn btn-secondary" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
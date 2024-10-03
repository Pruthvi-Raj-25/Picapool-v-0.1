import React from 'react';
import './header.css'; // Importing the CSS for the header
import  picapool_logo from './picapool_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <a href="/" className="logo">
          <img src={picapool_logo} alt="Picapool Logo" className="logo-image" /> 
          <span className="company-name">Picapool</span>
        </a>
      </div>
      <nav className="nav-links">
        <a href="/" className="nav-item">Home</a>
        <a href="/about-us" className="nav-item">About Us</a>
        <a href="/how-it-works" className="nav-item">How It Works</a>
        <a href="/partners" className="nav-item">Partners</a>
        <a href="/explore" className="nav-item">Explore</a>
        <a href="/picathon" className="nav-item">Picathon</a>
      </nav>
    </header>
  );
};

export default Header;

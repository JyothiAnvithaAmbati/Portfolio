import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
      <li><a href="#about"><i className="fas fa-user"></i> About Me</a></li>
      <li><a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
      <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
    </ul>
    <div className="navbar-name">Jyothi Anvitha Ambati</div>
  </nav>
);

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false); // Close the menu on route change
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">ORION 2K25</div>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="events">
          <Link to="/events">Events</Link>
          <div className="dropdown">
            <ul>
              <li><Link to="/technical">Tech</Link></li>
              <li><Link to="/non-technical">Non-Tech</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Register Now Button */}
        <li>
          <a 
            href="https://forms.gle/5dFzrg5HLzaA17q18" 
            className="register-now" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <div className="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;

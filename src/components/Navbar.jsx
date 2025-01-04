import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">School Portal</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/schedule" className="nav-link">Schedule</Link>
        </li>
        <li className="nav-item">
          <Link to="/grades" className="nav-link">Grades</Link>
        </li>
        <li className="nav-item">
          <Link to="/store" className="nav-link">Store</Link>
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

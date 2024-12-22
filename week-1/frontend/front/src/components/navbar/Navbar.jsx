import React, { useState } from "react";
import { FaBars, FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__title">
        <Link to="/home">ElectroHub</Link> 
      </div>
      <div className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/collections">Collections</Link></li> 
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contacts">Contacts</Link></li> 
        </ul>
      </div>
      <div className="navbar__icons">
        <FaSearch className="icon" />
        <Link to="/signin"><FaUser className="icon" /></Link>
        <Link to="/cart"><FaShoppingCart className="icon" /></Link>
        
      </div>
      <div className="navbar__menu-icon" onClick={handleMenuToggle}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;

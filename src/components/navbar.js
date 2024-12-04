import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav className="navbar">
            <h1>My Portfolio</h1>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/projects" className="nav-link">Projects</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
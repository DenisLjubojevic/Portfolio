import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar-items">
            <h1>My Portfolio</h1>
            <div>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/projects' className="nav-link">Projects</Link>
                <Link to='/contact' className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#about-me">About me</a></li>
                <li className="navbar-item"><a href="#projects">Projects</a></li>
                <li className="navbar-item"><a href="#skills">Skills</a></li>
                <li className="navbar-item"><a href="#contacts">Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

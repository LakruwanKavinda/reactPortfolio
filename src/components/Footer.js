// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Contact Me</h3>
                    <ul>
                        <li>Email: lakruwan@example.com</li>
                        <li>
                            <a href="https://linkedin.com/in/lakruwan" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/lakruwan" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Social Media</h3>
                    <ul>
                        <li>WhatsApp : +94 714144013</li>
                        <li>
                            <a href="https://facebook.com/lakruwan" target="_blank" rel="noopener noreferrer">
                                Facebook : Lakruwan Kavinda
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/lakruwan" target="_blank" rel="noopener noreferrer">
                                Instagram : Lakruwan Kavinda
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Address</h3>
                    <p>8/49 A,</p>
                    <p>ARAWATTA,</p>
                    <p>MAHIYANGANAYA</p>
                </div>
            </div>
            {/* Copyright Section */}
            <div className="footer-copyright">
                © 2024 Lakruwan Kavinda Dissanayake
            </div>
        </footer>
    );
}

export default Footer;

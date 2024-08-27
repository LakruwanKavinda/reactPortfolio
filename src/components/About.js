// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src="pp3.png" alt="About Me" />
                </div>
                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        I’m Lakruwan Kavinda Dissanayake, a passionate web developer with a focus on creating visually appealing and
                        highly functional websites. With a strong background in React and front-end development, I strive to build
                        experiences that are both intuitive and delightful.
                    </p>
                    <p>
                        Whether it's designing an elegant UI or crafting dynamic interactions, my goal is always to create products
                        that resonate with users and stand out in the digital world.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;

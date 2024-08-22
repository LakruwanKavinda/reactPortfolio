import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <section id="about-me">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}

export default App;

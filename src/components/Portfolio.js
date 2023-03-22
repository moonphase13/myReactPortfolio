import React, { useState } from 'react';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Projects from './Projects';
import LandingPage from './LandingPage';

function Portfolio() {
  const [header] = useState({
    name: 'Michael Frayne',
  });

  const [activeSection, setActiveSection] = useState('landingPage');

  const handleNavItemClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
  };

  return (
    <div>
      <header className="flex flex-row justify-between p-4">
        <h1>{header.name}</h1>
        <nav className="self-center">
          <ul className="flex flex-row">
            <li className="navLiItm">
              <a
                href="/"
                className={activeSection === 'aboutMe' ? 'active' : ''}
                onClick={(event) => handleNavItemClick('aboutMe', event)}
              >
                About Me
              </a>
            </li>
            <li className="navLiItm">
              <a
                href="/"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(event) => handleNavItemClick('projects', event)}
              >
                Projects
              </a>
            </li>
            <li className="navLiItm">
              <a href="/">Contact Me</a>
            </li>
            <li className="navLiItm">
              <a href="/">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        {activeSection === 'aboutMe' && <AboutMe />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'landingPage' && <LandingPage />}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Portfolio;

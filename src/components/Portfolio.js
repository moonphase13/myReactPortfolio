import React, { useState } from 'react';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Resume from './Resume';
import Secret from './Secret';

function Portfolio() {
  const [header] = useState({
    name: 'Michael Frayne',
  });

  const [activeSection, setActiveSection] = useState('aboutMe');

  const handleNavItemClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
  };

  return (
    <div>
      <header className="flex flex-row justify-between p-4">
        <h1 onClick={(event) => handleNavItemClick('secret', event)}>{header.name}</h1>
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
              >Portfolio
              </a>
            </li>
            <li className="navLiItm">
              <a 
                href="/" 
                className={activeSection === 'contactMe' ? 'active' : ''} 
                onClick={(event) => handleNavItemClick('contactMe', event)}
              >Contact Me</a>
            </li>
            <li className="navLiItm">
              <a 
                href="/"
                className={activeSection === 'resume' ? 'active' : ''}
                onClick={(event) => handleNavItemClick('resume', event)}
              >Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main my-20">
        {activeSection === 'aboutMe' && <AboutMe />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contactMe' && <ContactMe />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'secret' && <Secret />}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Portfolio;

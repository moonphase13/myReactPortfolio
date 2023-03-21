import React, { useState } from 'react';

function Navigation () {
  const [nav] = useState({
    mainHeader: "Welcome to my portfolio",
    subHeading: "This is what I've been working on recently.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  });
  return (
    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
    </ul>
  );
}; 

export default Navigation;
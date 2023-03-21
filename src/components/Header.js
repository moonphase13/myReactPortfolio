import React, { useState } from 'react';
import Navigation from './Navigation';

function Header () {
  const [header] = useState({
    mainHeader: "Welcome to my portfolio",
    subHeading: "This is what I've been working on recently.",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  });
  return (
    <header className="">
      <div className="">
        <div className="header__content">
          <div className="flex flex-row">
            <h1 className='text-black'>{header.mainHeader}</h1>
            <nav>
              <Navigation />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}; 

export default Header;
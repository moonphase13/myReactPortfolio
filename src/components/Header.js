import React, { useState } from 'react';
import Navigation from './Navigation';

function Header () {
  const [header] = useState({
    mainHeader: "Michael Frayne",
  });
  return (
    <header className="">
      <div className="">
        <div className="header__content">
          <div className="flex flex-row justify-between p-4">
            <h1 className='text-4xl font-bold'>{header.mainHeader}</h1>
            <nav className='self-center'>
              <Navigation />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}; 

export default Header;
import React from 'react';


function Navigation({ setShowAbout, setShowContact, setShowPortfolio }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => [setShowAbout(true),  setShowPortfolio(false), setShowContact(false)]}>About</button>
        </li>
        <li>
          <button onClick={() => [setShowPortfolio(true), setShowContact(false), setShowAbout(false)]}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => [setShowContact(true), setShowPortfolio(false), setShowAbout(false)]}>Contact</button>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navigation;

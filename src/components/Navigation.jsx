import React from 'react';
import ResumeLink from './ResumeLink.';





function Navigation() {


  return (
    <nav className="navbar">
  
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><ResumeLink /></li>
      </ul>
      
    </nav>
  );
}



export default Navigation;

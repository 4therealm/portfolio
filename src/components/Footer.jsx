import React from 'react';
import { about } from '../portfolioData'

export default function Footer() {
  const { social } = about


  return (
    <footer >
   
        

<ul>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.linkedin}>LinkedIn</a></li>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.github}>Github</a></li>
    </ul>
      
  
    </footer>
  );
}
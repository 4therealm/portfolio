import React from 'react';
import { about } from '../portfolioData'

export default function Footer() {
  const { social } = about
  

  return (
    <footer className="row">
      <div className="col-lg-4 col-sm-12">
        <p>© 2021 Max K. </p>
      </div>
      <div className="col-lg-4 col-sm-12">

<ul>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.linkedin}>LinkedIn</a></li>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.github}>Github</a></li>
    </ul>
      </div>
      <div className="col-lg-4 col-sm-12">
        <p>Max K. </p>
      </div>
    </footer>
  );
}
import React from "react";
import { about } from '../portfolioData'



export default function About() {
  const {description, resume, social } = about
  return(
    <section id="about" className="container">
    <h2>About me</h2>

    <p>{description}</p>
    <ul className="social row">
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={resume}>Resume</a></li>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.linkedin}>LinkedIn</a></li>
      <li className="col-lg-4 col-sm-12"><a className='about-links' href={social.github}>Github</a></li>
    </ul>


    </section>
  )
}
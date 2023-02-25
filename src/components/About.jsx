import React from "react";
import { about } from '../portfolioData'

export default function About() {
  const {name, role, description, resume, social } = about
  return(
    <section id="about" className="container">
    <h2>About me</h2>
    <h3>{name}</h3>
    <p>{role}</p> 
    <p>{description}</p>
    <ul className="social row">
      <li className="col-12"><a href={resume}>Resume</a></li>
      <li className="col-6"><a href={social.linkedin}>LinkedIn</a></li>
      <li className="col-6"><a href={social.github}>Github</a></li>
    </ul>
    </section>
  )
}
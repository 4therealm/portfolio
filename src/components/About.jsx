import React from "react";
import { about } from '../portfolioData'



export default function About() {
  const {description} = about
  return(
    <section id="about" className="container">
    <h2>About me</h2>

    <p>{description}</p>
    


    </section>
  )
}
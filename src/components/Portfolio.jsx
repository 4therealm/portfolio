import React from "react";
import Project from "./Project";
import { project } from "../portfolioData";
export default function Portfolio() {
  return (
    <section id="portfolio" className="container">
      <h2>Portfolio</h2>
        <Project project={project} />
    </section>
  )
}
import React from "react";

export default function Skills({skills}){
  return (
    <div className="row">
      {skills.map((skills) =>(
        <div className="skill col" key={skills}>
          <p>{skills}</p>
        </div>
      ))}
    </div>
  )
}
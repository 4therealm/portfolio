import React from "react";

export default function Skills({skills}){
  return (
    <div className="row">
      {skills.map((s) =>(
        <div className="skill col" key={s}>
          <p>{s}</p>
        </div>
      ))}
    </div>
  )
}
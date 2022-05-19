import React from "react";
import "../../styles/projects.css"

export default function ProjectTech({tech}) {
    return (
        <figure className="project-tech">
            <img src={`./assets/${tech.imageFile}`} alt={tech.name}></img>
            <p>{tech.name}</p>
        </figure>
    )
}

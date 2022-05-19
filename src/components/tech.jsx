import React from "react";
import "../styles/tech.css"

export default function Tech({tech}) {
    return (
        <figure className="tech">
            <img src={`./assets/${tech.imageFile}`} alt={tech.name}></img>
            <p>{tech.name}</p>
        </figure>
    )
}

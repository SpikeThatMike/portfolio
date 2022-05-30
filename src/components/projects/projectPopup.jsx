import React from "react";
import ProjectTech from "./projectTech";
import "../../styles/projects.css"

export default function ProjectPopup({item, close}) {
    return (
        <div className="pop-up">
            <button className="pop-up-exit" onClick={close}>&#10006;</button>
            <h2 className="pop-up-title">{item.name}</h2>
            <img className="pop-up-image" src={`./assets/${item.imageFile}`} alt="" />
            <p className="pop-up-desc">{item.description}</p>
            <h2 className="pop-up-tech-title">Some tech used in this project</h2>
            <div className="project-tech-container">
                {item.tech.map((tech, index) => {
                    return <ProjectTech key={index} tech={tech}/>
                })}
            </div>
            {(item?.github) ? <p className="pop-up-github">The source code for this is avaliable <a href={item.github} target="_block">Here</a></p> : ""}
            {(item?.discordInvite) ? <p className="pop-up-github">Invite me to your discord <a href={item.discordInvite} target="_block">Here</a></p> : ""}
        </div>
    )
}
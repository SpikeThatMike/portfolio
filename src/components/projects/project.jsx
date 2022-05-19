import React, { useState } from "react";
import "../../styles/projects.css";
import ProjectPopup from "./projectPopup";


export default function Project({item}) {
    const [popUp, setPopUp] = useState(false);
    const set = () =>  {
        setPopUp(popUp => !popUp);
        if(!popUp) window.scrollTo({
            top: document.querySelector(".projects-title")?.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
        });
    }
    return (
        <>
            <figure className="project">
                <img className="brief-image" src={`./assets/${item.imageFile}`} alt="Faction Bot"/>
                <h3 className="brief-title">{item.name}</h3>
                <h3 className="brief-description">{item.briefDescription}</h3>
                <button className="learn-more btn-one" onClick={set}>Learn more</button>
            </figure>
            {(popUp) ? <ProjectPopup item={item} close={() => setPopUp(popUp => !popUp)}/> : ""}
        </>
    )
}
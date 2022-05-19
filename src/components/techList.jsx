import React from "react";
import Tech from "./tech";
import "../styles/tech.css";

const tech_list = [
    {
        name: "NodeJS",
        imageFile: "nodejs.ico"
    },
    {
        name: "React",
        imageFile: "react.ico"
    },
    {
        name: "Discord.JS",
        imageFile: "discordjs.png"
    },
    {
        name: "Mineflayer",
        imageFile: "mineflayer.png"
    },
    {
        name: "HTML5",
        imageFile: "html.ico"
    },
    {
        name: "CSS3",
        imageFile: "css.ico"
    },
    {
        name: "jQuery",
        imageFile: "jquery.ico"
    },
]

export default function TechList() {
    return (
        <section id="tech">
            <h1>My technology stack</h1>
            {tech_list.map((tech, index) => {
                return <Tech key={index} tech={tech}/>
            })}
        </section>
    )
}
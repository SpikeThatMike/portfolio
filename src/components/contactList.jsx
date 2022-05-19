import React from "react";
import Contact from "./contact";
import "../styles/contact.css"

const contact_list = [
    {
        name: "Github",
        imageFile: "github.ico",
        link: "https://github.com/SpikeThatMike"
    },
    {
        name: "Discord",
        imageFile: "discord.ico",
        link: "https://discord.gg/6rAwtJQ9nf"
    },
    {
        name: "Fiverr",
        imageFile: "fiverr.ico",
        link: "https://www.fiverr.com/spikethatmike"
    },
]

export default function ContactList() {
    return (
        <section id="contacts">
            <h1>Contact Me</h1>
            <div className="contacts-container">
                {contact_list.map((item, index) => {
                    return <Contact key={index} item={item}/>
                })}
            </div>
        </section>
    )
}
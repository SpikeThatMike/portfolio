import React from "react";
import "../styles/contact.css"

export default function Contact({item}) {
    return (
        <>
            <a className="contact" href={item.link} target="_block">
                <img src={`./assets/${item.imageFile}`} alt={item.link} title={item.name}/>
            </a>
        </>
    )
}
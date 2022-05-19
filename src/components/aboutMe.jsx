import React from "react";
import "../styles/aboutMe.css";

export default function AboutMe() {
    return (
        <section id="about-me">
            <img src="https://cdn.discordapp.com/avatars/320542523586117632/45bcfe1afc1ec2221f2a57220bfe12b8.webp?size=128" alt="Profile picture"/>
            <h1>Hi, I'm SpikeThatMike</h1>
            <p>I develop <b style={{color: "green"}}>NodeJS</b> applications mainly for <b style={{color: "rgb(86, 99, 247)"}}>Discord</b> and am now branching out to Web Development using React, HTML & CSS.</p>
        </section>
    )
}
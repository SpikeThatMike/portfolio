import React, { useEffect, useState } from "react";
import "../styles/navbar.css"

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(toggle => !toggle);
    }
    
    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleNav}>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </div>
            <ul className={`navbar-list ${(toggle) ? "active" : ""}`}>
                <li className="navbar-item"><a href="#about-me">About Me</a></li>
                <li className="navbar-item"><a href="#tech">Tech</a></li>
                <li className="navbar-item"><a href="#projects">Projects</a></li>
                <li className="navbar-item"><a href="#contacts">Contact</a></li>
            </ul>
        </nav>
    )
}
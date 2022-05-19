import React from "react";
import "./styles/app.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutMe";
import TechList from "./components/techList";
import ProjectList from "./components/projects/projectList";
import ContactList from "./components/contactList";
import Footer from "./components/footer";

export default function App() {
    return (
        <>
            <Navbar/>
            <AboutMe/>
            <TechList/>
            <ProjectList/>
            <ContactList/>
            <Footer/>
        </>
    )
}
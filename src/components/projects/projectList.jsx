import React from "react";
import Project from "./project";
import "../../styles/projects.css";

const projects = [
    {
        name: "Faction Bot",
        briefDescription: "This application was made for a minecraft gamemode called Factions.",
        description: "This was specify made to enchance peoples experience while competing against others to give the best possible advantage. This helped automate tasks which now take seconds instead of minutes of hassle with help from the ability to use commands from minecraft to interact with discord.",
        imageFile: "faction-bot.png",
        tech: [
            {
                name: "NodeJS",
                imageFile: "nodejs.ico",
            },
            {
                name: "Discord.JS",
                imageFile: "discord.ico",
            },
            {
                name: "Mineflayer",
                imageFile: "mineflayer.png",
            },
        ]
    },
    {
        name: "Pacfish",
        briefDescription: "Pacfish's purpose is to help discord servers moderate their members.",
        description: "Pacfish is a public discord bot which anyone can invite to their discord server to allow for easier moderation of the server. Some of the many features included are; Customisable ticket system, Suggestion system, full economy system, games & much more! Unfortunately due to college exams, this project has been put on hold.",
        imageFile: "pacfish.png",
        tech: [
            {
                name: "NodeJS",
                imageFile: "nodejs.ico",
            },
            {
                name: "Discord.JS",
                imageFile: "discord.ico",
            },
            {
                name: "MongoDB",
                imageFile: "mongodb.ico",
            },
        ]
    },
    {
        name: "Pacfish Music",
        briefDescription: "Pacfish Music is a discord music player which supports many streaming platforms",
        description: "Pacfish Music offers 24/7 high quality music to any discord server for free. We support Youtube, Spotify, SoundCloud and Deezer songs (More coming soon!)",
        imageFile: "pacfish-music.png",
        tech: [
            {
                name: "NodeJS",
                imageFile: "nodejs.ico",
            },
            {
                name: "Discord.JS",
                imageFile: "discord.ico",
            },
            {
                name: "Play-dl",
                imageFile: "play-dl.png",
            },
            {
                name: "MongoDB",
                imageFile: "mongodb.ico",
            },
        ],
        discordInvite: "https://discord.com/api/oauth2/authorize?client_id=979497695788019742&permissions=139589935169&scope=bot%20applications.commands",
    }
]

export default function ProjectList() {
    return (
        <section id="projects">
            <h1 className="projects-title">Some of my projects</h1>
            <figure className="projects-centre">
                {projects.map((item, index) => {
                    return <Project key={index} item={item}/>
                })}
            </figure>
        </section>
    )
}

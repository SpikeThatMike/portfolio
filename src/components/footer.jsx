import React from "react";
import "../styles/footer.css"
import Contacts from "./contacts";

export default function Footer() {
    const contact_list = [
        {
            name: "Discord",
            link: "https://www.discord.com/users/320542523586117632",
        },
        {
            name: "Github",
            link: "https://github.com/spikethatmike",
            imagePath: "github.ico"
        },
        {
            name: "Fiverr",
            link: "https://fiverr.com/spikethatmike",
        },
    ]
    return (
        <footer id="footer">
            <div className="image">
                <img src="https://cdn.discordapp.com/avatars/320542523586117632/45bcfe1afc1ec2221f2a57220bfe12b8.webp?size=64" alt="Profile picture" />
                <a className="back-to-top" href="#">&#x2191; Back to Top</a>
            </div>
            {contact_list.map((c, index) => <Contacts item={c} key={index}/>)}
            <p>&copy; 2022 SpikeThatMike</p>
        </footer>
    )
}
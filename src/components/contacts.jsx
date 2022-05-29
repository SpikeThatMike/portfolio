import React from "react";
import "../styles/footer.css"

export default function Contacts({item}) {
    return (
        <>
            <a className="contact" href={item.link} target="_block">{item.name}</a>
        </>
    )
}
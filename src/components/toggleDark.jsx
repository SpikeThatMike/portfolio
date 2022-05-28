import React from "react";

export function ToggleDark() {

    const handleClick = () => {
        document.body.classList.toggle("dark-theme");
    }
    return (
        <div className="toggle-container">
            <input type="checkbox" onClick={handleClick} className="toggle-dark"/>
        </div>
    )
}
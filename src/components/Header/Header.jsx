import React from "react";
import './Header.css';

export default function Header(){
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
            </nav>
        </header>
    );
}
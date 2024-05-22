import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './info.css';
import avatar from '../../assets/avatar.jpg';
import icon from '../../assets/vn.png';

export default function Info() {
    const codeText = `Hello and welcome to my portfolio! I'm Duong Minh Long, a passionate
    .NET developer from Vietnam. I'm excited to share my journey with you.
    Dive in to explore my work, and feel free to reach out if you have any questions or collaboration ideas.
    Enjoy your visit!
`;

    return (
        <div className="avatar-container">
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="info">
                <h2>Duong Minh Long</h2>
                <p>
                    Location: Ho Chi Minh City, Viet Nam
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <img src={icon} alt="Location Icon" className="icon" />
                </p>
                <p>Software Developer</p>
                <div className="code-background">
                    <Typewriter
                        words={[codeText]}
                        loop={1}
                        cursor
                        cursorStyle="&#128149;"
                        typeSpeed={18}
                        deleteSpeed={0}
                        delaySpeed={1000}
                    />
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import './Skills.css';

const skills = {
    "01 — Frontend": ["JavaScript", "React", "Tailwind CSS/Bootstrap CSS", "HTML, CSS & SCSS", "Razor page"],
    "02 — Backend": ["Asp.Net Core/Framework", "REST APIs", "Grpc","Nodejs","SQL Server", "PostgreSQL", "Clean/Onion/Layered/VerticalSlice Architecture"],
    "03 — Other": ["Git & GitHub", "Message Broker", "Docker", "API Gateway", "Basic AWS"]
};

const Skills = () => {
    return (

        <>
                    <hr className="divider" id="skill" />
        <div className='title'>
            <h2>My Skillset</h2>
        </div>
        <div className="skills-container" id="skills">
            <div className="skills-content">
                <div className="skills-grid">
                    {Object.keys(skills).map((category, index) => (
                        <React.Fragment key={index}>
                            <div className="category-title">
                                <h3>{category}</h3>
                            </div>
                            <div className="skill-list">
                                {skills[category].map((skill, idx) => (
                                    <div key={idx} className="skill-item">{skill}</div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Skills;

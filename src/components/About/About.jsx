import React from 'react';
import './About.css';
// import whoIcon from '../../assets/who-icon.png';
// import ageIcon from '../../assets/age-icon.png';
// import emailIcon from '../../assets/email-icon.png'; 

const About = () => {

    const hobbies = [
        "Design System", "Video Games", "Cats",
        "Music", "Web Development","Foods", "Technology",
        "Rap", "Creativity", "Watching Movies", "Dogs", "Learning",
        "Coding", "Sing"
    ];

    const colors = ["#4CAF50", "#673AB7", "#F44336", "#2196F3"];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
            <hr className="divider" id="about" />
            <div className="title" >
                <h2>About Me</h2>
            </div>
        <div className="about-container" >
            <div className="info-section">
                <p>
                    {/* <img src={whoIcon} alt="Who am I Icon" className="icon" /> */}
                    Hello! My name is Duong Minh Long, a dedicated .NET developer from Vietnam. I specialize in building dynamic web applications using ASP.NET, with expertise in both front-end and back-end technologies such as HTML, CSS, JavaScript, and C#. I enjoy staying updated with the latest tech trends, exploring cloud computing with AWS, and containerization with Docker. Outside of coding, I love participating in tech communities and contributing to open-source projects. Let's connect and create something amazing together!
                </p>
                <p>
                    <strong>Phone:</strong><span>&nbsp;</span><p>+84 902814323</p><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span>
                    {/* <img src={emailIcon} alt="Email Icon" className="icon" /> */}
                    <strong>Email:</strong><span>&nbsp;</span> duongminhlong.working@gmail.com
                    <button className="email-button" onClick={() => window.location = 'mailto:duongminhlong.working@gmail.com'}>
                        Send Email
                    </button>
                    
                </p>
            </div>
            <div className="hobbies">
                <h3>Hobbies/Interests:</h3>
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index} style={{ backgroundColor: getRandomColor() }}>
                            {hobby}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}

export default About;

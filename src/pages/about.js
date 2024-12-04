import React from "react";
import "./about.css";

function About() {
    return (
        <section id="about" style={{padding: "2rem"}} className="about-container">
            <h2>About me</h2>
            <p>I am a Junior Developer who recently finished university.
                I have finished studies at The Zagreb University of Applied Science, where I got a bachelor's degree in Computing.</p>
            
            <p>I am hard-working and willing to learn new approaches.
                I am currently unemployed and without working experience, but actively searching for a job. I have experience in Web Development
                using Java Spring Framework for backend and Angular Cli for Frontend. I am currently working on a new project using .NET for backend 
                and React for frontend.</p>
            
            <br></br>
            
            <h2>Skills</h2>
            <p>At university, I have worked on many projects using different programming languages and frameworks. I have basic experience with:
                Angular Cli, Angular Routing, WebSockets, Java Spring, Spring Security, JUnit, JavaFX, MySQL, CSS, HTML, GitHub, Git.</p>
        </section>
    );
};

export default About;
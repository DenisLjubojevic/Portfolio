import React from "react";
import "./about.css";

function About() {
    return (
        <section id="about" style={{padding: "2rem", textAlign: "center"}} className="about-container">
            <h2>About me</h2>
            <p>I am Junior Developer who recently finished University.
                I have finished study at The Zagreb University of Applied Science, where I got a bachelor degree in Computing.</p>
            
            <p>I am hard-working and willing to learn new approuches.
                I am currently unempolyed and without working expireience, but activly searching for job. I have experience in Web Developement
                using Java Spring Framework for backend and Angular Cli for Frontend. Currently active working on new project using .NET for backend 
                and React for frontend.</p>
            
            <br></br>
            
            <h2>Skills</h2>
            <p>In University I have worked on many project using different programming languages and Frameworks. I have basic experience with:
                Angular Cli, Angular Routing, WebSockets, Java Spring, Spring Security, JUnit, JavaFX, MySQL, CSS, HTML, GitHub, Git.</p>
        </section>
    );
};

export default About;
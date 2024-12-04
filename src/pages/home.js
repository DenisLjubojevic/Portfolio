import React from "react";
import profilePicture from "../profile_picture.jpg"
import "./home.css";

function Home() {
    return (
        <section id="home" style={{padding: "2rem", textAlign: "center"}} className="home-container">
            <img src={profilePicture} alt="Profile picture" className="image-container"></img>
            <h2>Welcome to My Portfolio</h2>
            <p>I am a Junior Developer passionate about programming and fixing problems.</p>
        </section>
    );
};

export default Home;
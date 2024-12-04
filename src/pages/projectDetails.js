import React from 'react';
import { Link, useParams } from 'react-router-dom';
import zooLogo from '../zooLogo.png';
import pathfinderLogo from '../pathfinderLogo.png';
import chatterBoxLogo from '../chatterBoxLogo.png';
import './projectDetails.css';

const projectsData = {
    1: { 
        title: "ChatterBox",
        description: "Self-built Web application for chatting with other people",
        content: "This is a project built for education purposes. It was built using Java Spring Backend and Angular Frontend. Some of the features are: implemented Spring Security using JWT Token and autentification principles, Web Socketing for real time message transferring, Redis for tracking user statuses, interesting UI with included settings for changing themes, languages or even your privacy settings.",
        ytLink: "https://www.youtube.com/embed/wAqrR4sSaVs",
        gitHubLink: "https://github.com/DenisLjubojevic/ChatterBox",
        image: chatterBoxLogo
     },
    2: { 
        title: "Application for managing the processes of zoos",
        description: "Application made for final thesis at university",
        content: "Application made for final thesis at the University. It was created using the programming language Java. It is a desktop application that has implemented authentification and authorization. It is used for managing and organizing the processes of zoos. It helps employees track their jobs and saves valuable collected data. It uses JavaFX for UI and H2 database for easier implementation.",
        ytLink: "https://www.youtube.com/embed/_OeEeEHp2BY",
        gitHubLink: "https://github.com/DenisLjubojevic/ProjektIzJaveFakultet",
        image: zooLogo
     },
    3: { 
        title: "Pathfinder",
        description: "Application for organizing and planning travels",
        content: "This application was made as a project at the university. It has RecyclerView components for displaying travel destinations in the form of a list. It is connected to Google Maps to show the location of all these destinations. It has two roles (user / admin) and admin can edit, delete and insert each destination or travel plan. It is using local database Room for easier implementation. In the future, it could be upgraded by reworking it with Cloud database and implementing a system for booking a trip and seeing more details about the traveling plans.",
        ytLink: "https://www.youtube.com/embed/9hKF5jZemJ0",
        gitHubLink: "https://github.com/DenisLjubojevic",
        image: pathfinderLogo
     },
};

function ProjectDetails() {
    const {id} = useParams();
    const project = projectsData[id];

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div id="projectDetails" style={{padding: "1rem"}} className='details-container'>
            <img src={project.image} alt={project.title} className='details-image' />
            <h1>{project.title}</h1>

            <h3>{project.description}</h3>

            <p>{project.content}</p>

            <h2>Demo Video</h2>
            <div className="video-container">
                <iframe
                    src={project.ytLink}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Video Demo"
                ></iframe>
            </div>

            <p>
                GitHub link: <Link to={project.gitHubLink} className='github-link'>link</Link>
            </p>
        </div>
    );
}


export default ProjectDetails;
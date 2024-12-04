import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import zooLogo from '../zooLogo.png';
import pathfinderLogo from '../pathfinderLogo.png';
import chatterBoxLogo from '../chatterBoxLogo.png';

const allProjects = [
    {
        id: 1,
        title: "ChatterBox",
        description: "Self-built Web application for chatting with other people",
        image: chatterBoxLogo,
        details: "/chatterBox",
    },
    {
        id: 2,
        title: "Application for managing the processes of zoos",
        description: "Application made for final thesis at university",
        image: zooLogo,
        details: "/zoo",
    },
    {
        id: 3,
        title: "Pathfinder",
        description: "Application for organizing and planning travels",
        image: pathfinderLogo,
        details: "/pathfinder",
    }
]

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allProjects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex === 0 ? allProjects.length - 1 :  prevIndex - 1)
        );
    };

    return(
        <div className='projects-container'>
            <div className="carousel-container">
                <button className="arrow-button left" onClick={prevProject}>
                    &#8249; 
                </button>
                <div className="carousel-content">
                    <img
                        src={allProjects[currentIndex].image}
                        alt={allProjects[currentIndex].title}
                        className="project-image"
                    />
                    <h3>{allProjects[currentIndex].title}</h3>
                    <p>{allProjects[currentIndex].description}</p>
                    <Link to={`/projects/${allProjects[currentIndex].id}`} className="details-link">
                        View Details
                    </Link>               
                </div>
                <button className="arrow-button right" onClick={nextProject}>
                    &#8250; 
                </button>
            </div>
        </div>  
    );
};

export default Projects;
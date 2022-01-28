import React from 'react';
import Card from '../Card';
import image1 from '../../assets/images/weatherdashboard.jpg';
import image2 from '../../assets/images/gamespotblog.jpg';
import image3 from '../../assets/images/reelroulette.jpg';
import image4 from '../../assets/images/codingquiz.jpg';
import image5 from '../../assets/images/budgettracker.jpg';



const portfolio = [
    {
        name: "Weather Dashboard",
        description: "A weather app that displays a 5 day forecast for selected cities.",
        image: image1,
        url: "https://ethanfregien2233.github.io/weather-dashboard2/",
        github: "https://github.com/ethanfregien2233/weather-dashboard2"
    },    
    {
        name: "gameSpot Blog",
        description: "A gaming blog made with express, MySql, sequelize, bcrypt, bulma, express-session, and handlebars.",
        image: image2,
        url: "https://tranquil-tor-89831.herokuapp.com/",
        github: "https://github.com/ethanfregien2233/gameSpotBlog"
    },
    
    {
        name: "Reel Roulette",
        description: "Random movie and trailer generator using The Movie Database api and Youtube api.",
        image: image3,
        url: "https://ethanfregien2233.github.io/project-1/",
        github: "https://github.com/ethanfregien2233/project-1"
    },     
    {
        name: "Coding Quiz",
        description: "Timed quiz for users to review JS fundamentals",
        image: image4,
        url: "https://ethanfregien2233.github.io/code-quiz/",
        github: "https://github.com/ethanfregien2233/code-quiz"
    },  
    {
        name: "Budget Tracker",
        description: "A Progressive Web Application(PWA) that allows users to track their expenses online and offline.",
        image: image5,
        url: "https://stark-everglades-55642.herokuapp.com/",
        github: "hhttps://github.com/ethanfregien2233/Budget-tracker"
    },    
    
]

function Projects() {
    return (
        <div className='row justify-content-center me-5'>
          <h1 className="title mb-5">Projects</h1>
          {portfolio.map(function(portfolio) {
            return <Card 
                name={portfolio.name}
                description={portfolio.description}
                image={portfolio.image}
                url={portfolio.url}
                github={portfolio.github}
                key={portfolio.name}
            />
        })}
        </div>
    );
}

export default Projects;
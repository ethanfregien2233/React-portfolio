import React from 'react';
import Card from '../Card';
import image1 from '../../assets/images/weatherdashboard.jpg';
import image2 from '../../assets/images/gamespotblog.jpg';
import image3 from '../../assets/images/reelroulette.jpg';
import image4 from '../../assets/images/codingquiz.jpg';
import image5 from '../../assets/images/note.jpg';
import image6 from '../../assets/images/img6.jpg';


const portfolio = [  
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
        url: "https://ethanfregien2233.github.io/reel-roulette/",
        github: "https://github.com/ethanfregien2233/reel-roulette"
    },     
    {
        name: "Note Taker",
        description: "A note taking application allows users to save notes with a title and plain text.",
        image: image5,
        url: "https://dry-lake-21011.herokuapp.com/",
        github: "https://github.com/ethanfregien2233/note-taker2"
    },    
    {
        name: "The Raffler",
        description: "A MERN app for creating and participating in raffle giveaways.",
        image: image6,
        url: "https://guarded-brushlands-70829.herokuapp.com/",
        github: "https://github.com/ethanfregien2233/the-raffler"
    }
    
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
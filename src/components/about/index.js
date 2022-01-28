import React from 'react';
import avatar from '../../assets/images/headshot.jpg';
function About () {
    return (
        <section className='row'>
            <h1 className='col-12 my-4 mx-auto'>Ethan Fregien</h1>
            <img className='col-sm-4 mx-auto mb-5' src={avatar} alt='Picture of Ethan' />
            <p className='col-6 my-5 mx-auto pb-5'>
             Hello! I am a web developer with a full-stack web development certificate from the University of Wisconsin Madison. Check out my recent projects, should you have any requests or questions feel free to contact me!
            </p>
        </section>
    )
}

export default About;
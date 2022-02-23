import React from 'react';
import avatar from '../../assets/images/headshot.jpg';
function About () {
    return (
        <section className='row'>
            <h1 className='col-12 my-4 mx-auto'>Ethan Fregien</h1>
            <img className='col-sm-4 mx-auto mb-5' src={avatar} alt='Picture of Ethan' />
            <p className='col-6 my-5 mx-auto pb-5'>
            Front-end web developer leveraging my background in biological and physical sciences to aid in the critical thinking required to build intuitive and responsive user experiences on the web. Recently earned a certificate in full stack development from the University of Wisconsin Coding, with freshly developed skills in JavaScript, HTML, CSS, React.js, and responsive web design. Known as a creative critical thinking problem solver with a passion for developing apps with an emphasis on app individuality. With every project, my goal is to fully engage and immerse my audience for the most impactful user experience. I have applied aspects of both front-end and back-end technologies in my most recent project. I worked with a team of six to develop a single-page MERN app that allows users to participate in raffle giveaways. I’m excited to show off my new found skills within a fast-paced, quality-focused team to create better experiences on the world wide web.
            </p>
        </section>
    )
}

export default About;
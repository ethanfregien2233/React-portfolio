import React from 'react';
import resume from '../../assets/resume/resume1.pdf'

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <h3>Skills</h3>
                <ul className='row'>
                    <li className='col-sm-4 mb-2'>JavaScript</li>
                    <li className='col-sm-4 mb-2'>Git/GitHub</li>
                    <li className='col-sm-4 mb-2'>HTML/CSS</li>
                    <li className='col-sm-4 mb-2'>Express.js</li>
                    <li className='col-sm-4 mb-2'>MongoDB</li>
                    <li className='col-sm-4 mb-2'>React.js</li>
                    <li className='col-sm-4 mb-2'>Bootstrap</li>
                    <li className='col-sm-4 mb-2'>Node.js</li>
                </ul>
            <a href={resume} target="_blank" className='resume'>Resume</a>
        </div>
    )
}

export default Resume;
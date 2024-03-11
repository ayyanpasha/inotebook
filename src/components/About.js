// src/components/About.js

import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About iNoteBook</h1>
            <p>
                iNoteBook is a note-taking application built with React. It allows users to create, edit, and delete notes efficiently.
            </p>
            <p>
                The application is designed to provide a simple and intuitive interface for managing notes. Users can sign up, log in, and access their notes securely.
            </p>
            <p>
                iNoteBook utilizes React Router for navigation and Context API for state management. It also integrates with an Express.js backend and MongoDB database for data storage and retrieval.
            </p>
            <p>
                Get organized and stay productive with iNoteBook!
            </p>
            <h2>Socials (Ayyan Pasha):</h2>
            <a target='_black' href='https://github.com/ayyanpasha/'>Github <i className="fa-brands fa-github fa-2xl" style={{ color: 'black' }}></i></a> <br /><br />
            <a target='_black' href="https://twitter.com/ayyan_pasha02"> Twitter <i className="fa-brands fa-twitter fa-2xl" style={{ color: 'black' }}></i></a>
        </div>
    );
}

export default About;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <>
        <footer className="container">
            <h2>Check out my GitHub and LinkedIn</h2>
            <nav>
            <a href="https://github.com/nzerr57">
                <FontAwesomeIcon className="fa-5x mr-3" icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/nathan-zerr/">
            <FontAwesomeIcon className="fa-5x mr-3" icon={faLinkedin} />
            </a>
            </nav>
            </footer>
        </>
    )
};
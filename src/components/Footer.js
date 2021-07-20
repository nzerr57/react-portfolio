import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <>
        <footer>
            <nav>
            <a href="https://github.com/nzerr57">
                <FontAwesomeIcon className="fa-5x m-5 text-white" icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/nathan-zerr/">
            <FontAwesomeIcon className="fa-5x m-5 text-white" icon={faLinkedin} />
            </a>
            <a href="https://stackoverflow.com/users/15796535/nzerr?tab=profile">
            <FontAwesomeIcon className="fa-5x m-5 text-white" icon={faStackOverflow} />
            </a>
            </nav>
            </footer>
        </>
    )
};
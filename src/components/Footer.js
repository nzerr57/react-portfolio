import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <p>test</p>
            <a href="https://github.com/nzerr57">
                <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href="https://www.linkedin.com/in/nathan-zerr/">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </>
    )
};
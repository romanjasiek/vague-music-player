import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div>
    <ul className="footer-menu">
        <li className="footer-menu-item">Created by <span className="footer-icon">Roman Jasiek</span> in 2021 with <FontAwesomeIcon className="footer-icon" icon={faHeart}/>, <FontAwesomeIcon className="footer-icon" icon={faCoffee}/> and incredible support from <span className="footer-icon">Ghassan Aldarwish</span></li>
        <li className="footer-menu-item"><a href="tel:+491724563446"><FontAwesomeIcon icon={faPhoneSquareAlt}/> Mobile: +49 172 456 3 446</a></li>
        <li className="footer-menu-item"><a href="mailto:romanjasiek@me.com?subject=Contact%20Request"><FontAwesomeIcon icon={faEnvelopeSquare}/> romanjasiek@me.com</a></li>
        <li className="footer-menu-item"><a href="https://www.linkedin.com/in/romanjasiek/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a></li>
        <li className="footer-menu-item"><a href="https://github.com/romanjasiek"><FontAwesomeIcon icon={faGithub}/> GitHub</a></li>
    </ul>
        </div>
    )
}

export default Footer;
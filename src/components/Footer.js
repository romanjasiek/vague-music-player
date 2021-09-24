import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelopeSquare, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <div>
    <ul class="footer-menu">
        <li class="footer-menu-item"><a href="tel:+491724563446"><FontAwesomeIcon icon={faPhoneSquareAlt}/> Mobile: +49 172 456 3 446</a></li>
        <li class="footer-menu-item"><a href="mailto:romanjasiek@me.com?subject=Contact%20Request"><FontAwesomeIcon icon={faEnvelopeSquare}/> romanjasiek@me.com</a></li>
        <li class="footer-menu-item"><a href="https://www.linkedin.com/in/romanjasiek/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a></li>
        <li class="footer-menu-item"><a href="https://github.com/romanjasiek"><FontAwesomeIcon icon={faGithub}/> GitHub</a></li>
        <li class="footer-menu-item">Created by <span className="footer-icon">Roman Jasiek</span> in 2021 with <FontAwesomeIcon className="footer-icon" icon={faHeart}/> and <FontAwesomeIcon className="footer-icon" icon={faCoffee}/>  in Magdeburg</li>
    </ul>
        </div>
    )
}

export default Footer;
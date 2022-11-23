import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css';

function Footer() {
 
  return (
    <div className='d-flex justify-content-center fa-2x min-vh-100 '>
      <a href="https://github.com/mstan19" target = "_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} className='icons px-3 ' /> </a>
      <a href="https://www.linkedin.com/in/melissa-stan-a67008240" target = "_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} className='icons px-3'/> </a>
      <a href="https://stackoverflow.com/users/19202356/melissa-s" target = "_blank" rel="noreferrer"> <FontAwesomeIcon icon={faStackOverflow} className='icons px-3'/> </a>
    </div>
  );
}

export default Footer;
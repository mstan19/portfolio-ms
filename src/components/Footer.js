import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css';

function Footer() {
 
  return (

    <div className='row d-flex justify-content-center fa-2x mb-4 mt-auto px-3'>
      <a href="https://github.com/mstan19" target="_blank" rel="noreferrer" className='col-4 d-flex justify-content-center'> <FontAwesomeIcon fixedWidth icon={faGithub} className='p-3 icons' /> </a>
      <a href="https://www.linkedin.com/in/melissa-stan-a67008240" target="_blank" rel="noreferrer" className='col-4 d-flex justify-content-center'> <FontAwesomeIcon fixedWidth icon={faLinkedin} className='p-3 icons'/> </a>
      <a href="https://stackoverflow.com/users/19202356/melissa-s" target="_blank" rel="noreferrer" className='col-4 d-flex justify-content-center'> <FontAwesomeIcon fixedWidth icon={faStackOverflow} className='p-3 icons'/> </a>
    </div>
  );
}

export default Footer;
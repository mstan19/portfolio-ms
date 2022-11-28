import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHouse, faFile, faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  return ( 
    <nav className="nav">
        <ul className="navbar-nav container-fluid ">
            <NavLink to="/" className='nav-link nav-item ' > 
                <FontAwesomeIcon icon={faHouse} className='nav-icons col-3' />
                <div className='nav-text col-8 '>About Me</div>
            </NavLink>

            <NavLink to="/projects" className='nav-link nav-item'>
                <FontAwesomeIcon icon={faChalkboardUser} className='nav-icons col-3' />
                <div className='nav-text col-8'>Projects</div>
            </NavLink>

            <NavLink to="/resume" className='nav-link nav-item'> 
                <FontAwesomeIcon icon={faFile} className='nav-icons col-3' />
                <div className='nav-text col-8 '>Resumé</div>
            </NavLink>

            <NavLink to="/contactMe" className='nav-link nav-item'> 
                <FontAwesomeIcon icon={faAddressBook} className='nav-icons col-3' />
                <div className='nav-text col-8'>Contact Me</div>
            </NavLink>
        </ul>
    </nav>
  );
}

function NavLink({ to, children, ...props}) {

    return(
        <li className={`my-2 nav-link-btn ${useLocation().pathname === to ? "activeBtn" : ""}`}>
            <Link to={to} {...props} className='row flex-nowrap justify-content-center' id='nav-highlight'>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;
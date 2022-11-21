import React from 'react';
import '../styles/Navbar.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import AboutMe from './AboutMe';
// import Project from './Project';
// import Resume from './Resume';
// import ContactMe from './ContactMe';

function Navbar() {
  return ( 
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark position-absolute top-0 end-0">
        <ul className="navbar-nav">
            <Link to="/aboutMe" className="nav-link nav-item active">About Me</Link>
            <CustomLink to="/projects" className="nav-link nav-item active">Projects</CustomLink>
            <CustomLink to="/resume" className="nav-link nav-item active">Resumé</CustomLink>
            <CustomLink to="/contactMe" className="nav-link nav-item active">Contact Me</CustomLink>
        </ul>
    </nav>
       
  );
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;
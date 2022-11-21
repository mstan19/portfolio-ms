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
            <li className="nav-item active">
                <Link to="/aboutMe" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item active">
                <CustomLink to="/projects" className="nav-link">Projects</CustomLink>
            </li>
            <li className="nav-item active">
                <CustomLink to="/resume" className="nav-link">Resumé</CustomLink>
            </li>
            <li className="nav-item active">
                <CustomLink to="/contactMe" className="nav-link">Contact Me</CustomLink>
            </li>
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
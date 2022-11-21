import React from 'react';
import '../styles/Navbar.css';
import { Link, useMatch, useResolvedPath, useLocation } from 'react-router-dom';

// function highlightMe(x) {
//     x.style.color = "yellow";
//   }
  
//   function normalTab(x) {
//     x.style.color = "white";
//   }

function Navbar() {
const {pathname} = useLocation();



  return ( 
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark justify-content-end">
        <ul className="navbar-nav">
            <NavLink to="/aboutMe" className={pathname === '/aboutMe' ? 'activeBtn nav-link nav-item' : 'nav-link nav-item'} >About Me</NavLink>
            <NavLink to="/projects" className={pathname === '/projects' ? 'activeBtn nav-link nav-item' : 'nav-link nav-item'} >Projects</NavLink>
            <NavLink to="/resume" className={pathname === '/resume' ? 'activeBtn nav-link nav-item' : 'nav-link nav-item'}>Resumé</NavLink>
            <NavLink to="/contactMe" className={pathname === '/contactMe' ? 'activeBtn nav-link nav-item' : 'nav-link nav-item'}>Contact Me</NavLink>
        </ul>
    </nav>
  );
}

function NavLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}

export default Navbar;
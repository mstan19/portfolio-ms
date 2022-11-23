import React from 'react';
import avatarPic from '../assets/avatarpic.jpg';
import '../styles/Header.css';

function Header() {
  return (
  <div className='header'> 
    <img className='profile-pic' src={avatarPic} alt='avatarpic' id='avatar-pic'/> 
    <h1 className="name">Melissa Stan </h1>
  </div>
 
  );
}

export default Header;

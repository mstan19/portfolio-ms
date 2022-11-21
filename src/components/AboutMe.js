import React from 'react';
import profilePic from '../assets/profilePic.JPG';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe">
      <img className='profile-pic' src={profilePic} />
      <h1>About Me</h1>
      <p>I am web developer who specializes in creating user friendly websites. I am experienced with various computer languages e.g., HTML, CSS, and JavaScript. Given my medical background, I personally strive to make medicine  more accessible to the under served.</p>
    </div>
  );
}

export default AboutMe;


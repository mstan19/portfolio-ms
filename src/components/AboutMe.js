import React from 'react';
import profilePic from '../assets/profilePic.JPG';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe container-fluid"> 
      <h1 className='row justify-content-center' id='about-me-title'>About Me</h1>
      <hr id='title-line'></hr>
      <div className='row justify-content-center my-2'>
        <p className='col-6' id='about-me-text'>I am web developer who specializes in creating user friendly websites. I am experienced with various computer languages e.g., HTML, CSS, and JavaScript. Given my medical background, I personally strive to make medicine  more accessible to the under served.I am web developer who specializes in creating user friendly websites. I am experienced with various computer languages e.g., HTML, CSS, and JavaScript. Given my medical background, I personally strive to make medicine  more accessible to the under served.I am web developer who specializes in creating user friendly websites. I am experienced with various computer languages e.g., HTML, CSS, and JavaScript. Given my medical background, I personally strive to make medicine  more accessible to the under served. </p>
        <img className='profile-pic col-6' src={profilePic} alt='about-me'/>
      </div>
    </div>
  );
}

export default AboutMe;


import React from 'react';
import profilePic from '../assets/profilePic.JPG';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe container-fluid"> 
      <h1 className='row justify-content-center' id='about-me-title'>About Me</h1>
      <hr id='title-line'></hr>
      <div className='row justify-content-center my-2'>
        <p className='col-6' id='about-me-text'>I am a web developer who specializes in creating user-friendly websites. I am experienced with various computer languages and frameworks, such as HTML5, CSS, JavaScript, JQuery, Client and Server-side APIs, MySQL and NOSQL databases, React, and Node.js. I enjoy making applications that are user-friendly. </p>
        <img className='profile-pic col-6' id='profile-pic' src={profilePic} alt='about-me'/>
      </div>
    </div>
  );
}

export default AboutMe;


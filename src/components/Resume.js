import React from "react";
import pdf from '../assets/resume.pdf'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import '../styles/Resume.css';

// const frontendIcons = [
//   {
//     title: 'HTML',
//     icon: faHtml5,
        
//   },
//   {
//     title: 'CSS',
//     icon: faCss3Alt,
      
//   },
//   {
//     title: 'JavaScript',
//     icon: faJs,
      
//   },
//   {
//     title: 'React',
//     icon: faReact,
      
//   },
//   {
//     title: 'Bootstrap',
//     icon: faBootstrap,
      
//   },
// ]

// const backendIcons = [
//   {
//     title: 'APIs',
//     icon: faHtml5,
        
//   },
//   {
//     title: 'Node',
//     icon: faNodeJs,
      
//   },
//   {
//     title: 'Express',
//     icon: faJs,
      
//   },
//   {
//     title: 'MySQL',
//     icon: faReact,
      
//   },
//   {
//     title: 'Sequelize',
//     icon: faBootstrap,
      
//   },
//   {
//     title: 'MongoDB',
//     icon: faJs,
      
//   },
//   {
//     title: 'Monogoose',
//     icon: faReact,
      
//   },
//   {
//     title: 'GraphQL',
//     icon: faBootstrap,
      
//   },
// ]
                      
function Resume() {
  return (
    <div className="resume text-center">
      <div className="resume-header">
        <h1 id='resume-title'>Resumé</h1>
      </div>
      <hr id='title-line'></hr>
      <div className="resume-icon">
        <a href = {pdf} download="myFile" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} className='icon px-3' id='downloadIcon'/>Download My Resumé</a>
      </div>
      <div class="resume-list">
        <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
      </div>
    </div>
  );
}

export default Resume;
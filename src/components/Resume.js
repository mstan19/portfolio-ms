import React from "react";
import pdf from '../assets/resume.pdf'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import '../styles/Resume.css';

const frontendIcons = [
  {
    title: 'HTML',
    icon: faHtml5,
        
  },
  {
    title: 'CSS',
    icon: faCss3Alt,
      
  },
  {
    title: 'JavaScript',
    icon: faJs,
      
  },
  {
    title: 'React',
    icon: faReact,
      
  },
  {
    title: 'Bootstrap',
    icon: faBootstrap,
      
  },
]

const backendIcons = [
  {
    title: 'APIs',
    icon: faHtml5,
        
  },
  {
    title: 'Node',
    icon: faNodeJs,
      
  },
  {
    title: 'Express',
    icon: faJs,
      
  },
  {
    title: 'MySQL',
    icon: faReact,
      
  },
  {
    title: 'Sequelize',
    icon: faBootstrap,
      
  },
  {
    title: 'MongoDB',
    icon: faJs,
      
  },
  {
    title: 'Monogoose',
    icon: faReact,
      
  },
  {
    title: 'GraphQL',
    icon: faBootstrap,
      
  },
]
function Resume() {
  return (
    <div className="resume text-center">
      <div className="resume-header">
        <h2>Resumé</h2>
      </div>
      <a href = {pdf} download="myFile" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} className='icon px-3' id='downloadIcon'/>Download My Resumé</a>

      <Row lg={1}>
        <Col className="cards d-flex " >
          {frontendIcons.map(skill =>{
            const {title, icon} = skill;
            return(
              <Card className="container " style={{ width: '5rem' }} key={title}>
                <Card.Body className="card-body d-flex justify-content-center"   >
                <FontAwesomeIcon icon={icon} className='icons fa-3x'/> 
                  <Card.Title className="card-icon-name fs-3 fw-bold"> {title}</Card.Title>
                </Card.Body>
              </Card>
                );
              })}
        </Col>
    </Row>

    <Row md={1}>
        <Col className="cards d-flex " >
          {backendIcons.map(skill =>{
            const {title, icon} = skill;
            return(
              <Card className="container " style={{ width: '5rem' }} key={title}>
                <Card.Body className="card-body d-flex justify-content-center"   >
                <FontAwesomeIcon icon={icon} className='icons fa-3x'/> 
                  <Card.Title className="card-icon-name fs-3 fw-bold"> {title}</Card.Title>
                </Card.Body>
              </Card>
                );
              })}
        </Col>
    </Row>
    </div>
  );
}

export default Resume;
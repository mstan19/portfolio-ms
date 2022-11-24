import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import projectOnePic from '../assets/project1pic.png';
import projectTwoPic from '../assets/project2pic.png';
import projectThreePic from '../assets/comingsoon.jpg';
import '../styles/Project.css';

const projects = [
  {
      title: '1',
      description:
          'xasdadasdasdasdadadads',
      image: projectOnePic,
      technologies: [
          'x',
      ],
      github: 'https://github.com/TeryKing/Project-MeowWoof',
      deployedLink: 'x',  
  },
  {
      title: '2',
      description:
        'yxasdadasdasdasdadadads',
      image: projectTwoPic,
      technologies: [
        'y',
      ],
      github: 'https://github.com/Yuyitax/TurnipFest',
      deployedLink: 'y',
},
{
  title: '3',
  description:
    'yxdasdadasdasdasdadadads',
  image: projectThreePic,
  technologies: [
    'y',
  ],
  github: 'https://github.com/PeytonCast/dream-team',
  deployedLink: 'y',
}
]

function Project() {
  
  return (
    <Row >
      <h1 id="project-title"> Projects</h1>
      <hr id='title-line'></hr>
        <Col className="cards d-flex" >
          {projects.map(project =>{
            const {title, image, github, description, technologies, deployedLink} = project;
            return(
              <Card className="container" style={{ width: '25rem', padding: '0px' }} key={title}>
                <a href={github} target="_blank" rel="noreferrer">
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src={image}
                    alt="Mock up"
                  />
                  <Card.Body className="card-body"   >
                    <Card.Title className="card-title fs-3 fw-bold">Title: {title}</Card.Title>
                      <Card.Text className="card-text" id="description">Description: {description}</Card.Text>
                      <Card.Text className="card-text" id="technologies">Technologies Used: {technologies}</Card.Text>
                      <Card.Text className="card-text" id="deployedLink">Deployed Link: {deployedLink}</Card.Text>
                  </Card.Body>
                </a>
              </Card>
                );
              })}
        </Col>
    </Row>
  )
}

export default Project;

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
      github: 'x',
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
      github: 'y',
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
  github: 'y',
  deployedLink: 'y',
}
]

function Project() {
  
  return (
    <Row lg={1}>
      <h2 style={{ textAlign: 'center' }}> Projects</h2>
        <Col className="cards d-flex" >
          {projects.map(project =>{
            const {title, image, description, technologies, deployedLink} = project;
            return(
              <Card className="container" style={{ width: '25rem', padding: '0px' }} key={title}>
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
              </Card>
                );
              })}
        </Col>
    </Row>
  )
}

export default Project;

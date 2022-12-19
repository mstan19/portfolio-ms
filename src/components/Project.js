import React from "react";
import Card from 'react-bootstrap/Card';
import projectOnePic from '../assets/project1pic.png';
import projectTwoPic from '../assets/project2pic.png';
import projectThreePic from '../assets/project3pic.png';
import socialNetworkPic from '../assets/socialnetworkmockuppic.png';
import teamGeneratorPic from '../assets/team-profile-mockup.png';
import textEditorPic from '../assets/indexeddb.png';
import '../styles/Project.css';

const projects = [
  {
    title: 'MeowWoof',
    image: projectOnePic,
    technologies: [
        'Node.js, ',
        'JQuery UI, ',
        'TailwindCSS/Bootstrap, ',
        'sendgrid, ',
        'Mysql, ',
        'Sequelize'
    ],
    github: 'https://github.com/TeryKing/Project-MeowWoof',
  },
{
    title: 'Turnip Fest',
    image: projectTwoPic,
    technologies: [
      'Sever-side API, ',
      'JQuery UI, ',
      'TailwindCSS ',
    ],
    github: 'https://github.com/Yuyitax/TurnipFest',
},
{
  title: 'ReduMade',
  image: projectThreePic,
  technologies: [
    'MERN stack',
  ],
  github: 'https://github.com/PeytonCast/dream-team',
},
{
  title: 'Team Profile Generator',
  image: teamGeneratorPic,
  technologies: [
    'Test, ',
    'Node.js, ',
    'Inquirer',
  ],
  github: 'https://github.com/mstan19/Team-Profile-Generator-MS',
},
{
  title: 'Text Editor',
  image: textEditorPic,
  technologies: [
    'Program Web Application, ',
    'IDB, ',
    'Express',
  ],
  github: 'https://github.com/mstan19/text-editor-ms',
},
{
  title: 'Social Network',
  image: socialNetworkPic,
  technologies: [
    'Node.js, ',
    'MongoDB, ',
    'Mongoose, ',
    'Moment, ',
    'Express, ',
  ],
  github: 'https://github.com/mstan19/social-network-api-ms',
}
]

function Project() {
  
  return (
    <div >
      <h1 id="project-title"> Projects</h1>
      <hr id='title-line'></hr>
        <div className="row cards d-flex" >
          {projects.map(project =>{
            const {title, image, github, technologies} = project;
            return(
              <Card className="col-4 container mb-5" style={{ width: '25rem', padding: '0px' }} key={title}>
                <div className="single-card">
                  <a href={github} target="_blank" rel="noreferrer">
                    <Card.Img
                      variant="top"
                      className="card-img"
                      src={image}
                      alt="Mock up"
                    />
                    <Card.Body className="card-body"   >
                      <Card.Title className="card-title fs-3 fw-bold">Title: {title}</Card.Title>
                        <Card.Text className="card-text" id="technologies">Technologies Used: {technologies}</Card.Text>
                    </Card.Body>
                  </a>
                </div>
              </Card>
                );
              })}
        </div>
    </div>
  )
}

export default Project;

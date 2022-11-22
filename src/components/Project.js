import React from "react";
import ProjectCard from './ProjectCard';
import projectOnePic from '../assets/project1pic.png';
import projectTwoPic from '../assets/project2pic.png';
import projectThreePic from '../assets/comingsoon.jpg';


// import profilePic from '../assets/profilePic.JPG';

const projects = [
  {
      title: '1',
      description:
          'x',
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
        'y',
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
    'y',
  image: projectThreePic,
  technologies: [
    'y',
  ],
  github: 'y',
  deployedLink: 'y',
}
]

export default function Project() {
  let allProjects = [];
  for (var i = 0; i < projects.length; i++) {
    allProjects.push( <ProjectCard key={projects[i].title} image={projects[i].image} name={projects[i].title} description={projects[i].description} technologies={projects[i].technologies} deployedLink={projects[i].deployedLink} />);
  }
  return (
    <div>
      <div className="project-header card">
        <h2>Projects</h2>
      </div>
  
      {allProjects}
    </div>
  );
}

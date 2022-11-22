import React from 'react';

function ProjectCard(props) {
  
    return (
      <div className="container">
        <div className="card-body">
        <img
          className="card-img-top"
          src={props.image}
          alt="Mock up picture"
        />
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <h5 className="card-title">Title: {props.title}</h5>
            <p className="card-text">Description: {props.description}</p>
            <p className="card-text">Technologies Used: {props.technologies}</p>
            <p className="card-text">Deployed Link: {props.deployedLink}</p>
{/* 
            <a href="#" className="btn btn-primary">
              Adopt {props.github}
            </a> */}
      </div>
      </div>
    );
  }
  
  export default ProjectCard;
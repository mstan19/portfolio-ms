import React from "react";

function Project(props) {
  return (
    <div className="project text-center">
      <div className="project-header">
        <h2>Projects</h2>
      </div>
      <div className="project-body">{props.children}</div>
    </div>
  );
}

export default Project;
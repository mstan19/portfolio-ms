import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import '../styles/Resume.css';

<i class="fa-regular fa-download"></i>
function Resume() {
  return (
    <div className="resume text-center">
      <div className="resume-header">
        <h2>Resumé</h2>
      </div>
      <a href="https://github.com/mstan19"> <FontAwesomeIcon icon={faDownload} className='icon px-3' id='downloadIcon'/> </a>
    </div>
  );
}

export default Resume;
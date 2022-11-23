import React from "react";
import pdf from '../assets/resume.pdf'
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
      <a href = {pdf} download="myFile" target = "_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} className='icon px-3' id='downloadIcon'/>Download My Resumé</a>
    </div>
  );
}

export default Resume;
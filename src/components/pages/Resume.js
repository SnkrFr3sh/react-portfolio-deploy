import React from 'react';
import '../Resume.css'
import ResumeBack from '../assets/resumeBack.jpg';
import ResumeFront from '../assets/resumeFront.jpg';
import ExternalLink from '../ExternalLink.js'


export default function Resume() {
  return (
    <div>
      <div class='ResumeBody'>
        <div class='buttonRow'>
          <button class='resumeBtn' onClick={ExternalLink}>DOWNLOAD</button>
        </div>
        <div class='row resumeRow'>
          <div class='col-3'>
            <img src={ResumeFront} alt='front of resume' class='resumeFront' />
          </div>
          <div class='col-3'>
            <img src={ResumeBack} alt='front of resume' class='resumeBack' />
          </div>

        </div>
      </div>
    </div>
  );
}

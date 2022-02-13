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
          <a href='https://drive.google.com/file/d/13Q4aYMW2-QulCvVD3mwwaHy4w47bwG5b/view' target='_blank' class='resumeDL'>DOWNLOAD</a>
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

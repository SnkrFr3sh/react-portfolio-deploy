import React from 'react';
import '../Contact.css';
import hill from '../assets/hillLayerColor.png';
import mountain from '../assets/mountainLayerColor.png';

export default function Contact() {
  return (
    <div className='contactBody'>
      <div className='contactTitle1'>CONTACT</div>
      <div className='contactTitle2'>ME</div>
      <div className='shadedBoxTitle'></div>
      <div className='shadedBoxContent'>
        <div className='contactText'>
          <p> EMAIL: Mpacampara@gmail.com</p>
          <p> GITHUB: SnkrFr3sh</p>
          <a href='https://www.linkedin.com/in/marc-pacampara-b75a4bba/'>LinkedIn</a>


        </div>
      </div>
      <img src={hill} alt='hilltop' className='hilltop'/>
      <img src={mountain} alt='mountain' className='mountain'/>
      <div class='vl'></div>
            <div class='email'>mpacampara@gmail.com</div>

    </div>
  );
}

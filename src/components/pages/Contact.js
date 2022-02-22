import React from 'react';
import '../assets/css/Contact.css';
import hill from '../assets/images/hillLayerColor.png';
import mountain from '../assets/images/mountainLayerColor.png';

export default function Contact() {
  return (
    <div className='contactBody'>
      <div className='contactTitle1'>CONTACT</div>
      <div className='contactTitle2'>ME</div>
      <div className='shadedBoxTitle'></div>
      <div className='shadedBoxContent'>
        <div className='contactText'>
          <p> EMAIL: Mpacampara@gmail.com</p>
          <p><a href= 'https://github.com/SnkrFr3sh'> GITHUB</a></p>
          <p><a href='https://www.linkedin.com/in/marc-pacampara-b75a4bba/'>LinkedIn</a></p>


        </div>
      </div>
      <img src={hill} alt='hilltop' className='hilltop'/>
      <img src={mountain} alt='mountain' className='mountain'/>
      <div class='vl'></div>
            <div class='email'>mpacampara@gmail.com</div>

    </div>
  );
}

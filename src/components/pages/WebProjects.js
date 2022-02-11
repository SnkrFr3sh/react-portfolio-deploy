import React from 'react';
import '../WebProjects.css'
import buildingVector from '../assets/buildingVector.png'

export default function WebProjects() {
  return (
    <section class='WebProjectsBody'>
      <div class='WebProjectsCardBox'></div>
      <div class='WebProjectsTitleBox'></div>
      <div class='webTitle1'>WEB</div>
      <div class='webTitle2'>DEVELOPMENT</div>
      <div class='WebProjectsContentBox'></div>
        <div class='techBox'></div>
        <div class="techBoxTitle">TECHNOLOGIES</div>
        <div class="techBoxContent">
          
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur deserunt quam voluptatum quos ipsa cupiditate ipsum qui sequi illum? Qui exercitationem accusamus totam natus ut fugit magnam modi eaque doloremque.</div>
        <img src={buildingVector} alt='building' class='buildingImg' />
        {/* Card prop */}
      
      <div class='vl'></div>
      <div class='email'>mpacampara@gmail.com</div>

    </section>
  );
}

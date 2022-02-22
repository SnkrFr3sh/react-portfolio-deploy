import React from 'react';
import '../assets/css/WebProjects.css'
import buildingVector from '../assets/images/buildingVector.png'
import p1 from '../assets/images/project1.jpeg'
import p2 from '../assets/images/project2.png'
import p3 from '../assets/images/project3.png'
import p4 from '../assets/images/project4.png'
import p5 from '../assets/images/project5.png'
import p6 from '../assets/images/project6.png'

export default function WebProjects() {
  return (
    <section class='WebProjectsBody'>
      <div class='WebProjectsCardBox'></div>
      <div class='WebProjectsTitleBox'></div>
      <div class='webTitle1'>WEB</div>
      <div class='webTitle2'>PROJECTS</div>
      <div class='WebProjectsContentBox'></div>
      <div class='techBox'></div>
      <div class="techBoxTitle">TECHNOLOGIES</div>
      <div class="techBoxContent">
        <p className='techText'>HTML, CSS, Node.js, Express.js, REACT, MongoDB, MySQL, NoSQL, Jquery, GraphQL, Bulma, Bootstrap, Heroku
        </p>
      </div>
      <div class='projectBoxSection'></div>
      <div class='pCard1 pCard'>
        <p>Joint Effort</p>
        <img src={p1} class="project project1" alt="First slide" />
        <p></p>
        <a href='https://github.com/mteubnerfoster/joint-effort' target='_blank' class='webLink'>GitHub Repo</a>
                <a href='https://joint-effort-kohmm.herokuapp.com/' target="_blank"> Deployed Link</a>
      </div>
      <div class='pCard2 pCard'>
        <p>Team Portfolio App</p>
        <img src={p2} class="project project2" alt="Second slide" />
        <p></p>
        <a href='https://github.com/SnkrFr3sh/team-portfolio' target='_blank' class='webLink'>GitHub Repo</a>
      </div>
      <div class='pCard3  pCard'>
        <p>NBA Stats</p>
        <img src={p3} class="project project3" alt="Third slide" />
        <p></p>
        <a href='https://github.com/SnkrFr3sh/sport_facts' target='_blank' class='webLink'>GitHub Repo</a>
        <a href='https://snkrfr3sh.github.io/sport_facts/' target="_blank"> Deployed Link</a>
      </div>
      <div class='pCard4  pCard'>
        <p>E-Commerce Backend</p>
        <img src={p4} class="project project4" alt="Fourth slide" />
        <p></p>
        <a href='https://github.com/SnkrFr3sh/ORM-Ecommerce-Backend' target='_blank' class='webLink'>GitHub Repo</a>
      </div>
      <div class='pCard5  pCard'>
        <p>Social Network API</p>
        <img src={p5} class="project project5" alt="Fifth slide" />
        <p></p>
        <a href='https://github.com/SnkrFr3sh/Social-Network-API' target='_blank' class='webLink'>GitHub Repo</a>
      </div>
      <div class='pCard6  pCard'>
        <p>Employee Tracker</p>
        <img src={p6} class="project project6" alt="Sixth slide" />
        <p></p>
        <a href='https://github.com/SnkrFr3sh/Employee-Tracker-MYSQL' target='_blank' class='webLink'>GitHub Repo</a>
      </div>

      <img src={buildingVector} alt='building' class='buildingImg' />
      {/* Card prop */}

      <div class='vl'></div>
      <div class='email'>mpacampara@gmail.com</div>

    </section>
  );
}

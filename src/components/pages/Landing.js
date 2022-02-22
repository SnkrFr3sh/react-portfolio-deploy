import React from 'react';
import '../assets/css/Landing.css'
// import LandingImage from '../assets/landingimg.jpg'
import run1 from '../assets/images/runVectorMain.png'
import run2 from '../assets/images/runArtist.png'
import run3 from '../assets/images/runChoreo.png'
import run4 from '../assets/images/runWeb.png'




export default function Landing() {
    return (
        <div class='landingBody'>
            <div className='runSection'>
                <img src={run1} alt='running' class='run1 run' />
                <img src={run2} alt='running' class='run2 run' />
                <img src={run3} alt='running' class='run3 run' />
                <img src={run4} alt='running' class='run4 run' />
            </div>

            <div class='iam'>I AM</div>
            <div class='textContainer'>
                <div class='titleFirstName'>
                    MARC
                </div>
                <div class='titleLastName'>
                    PACAMPARA
                </div>
                <div class='shadedBox'> </div>
                {/* <div class='mediumTitle A'>WEBDEVELOPER</div>
                <div class='mediumTitle B'>CHOREOGRAPHER</div>
                <div class='mediumTitle C'>ARTIST</div> */}

            </div>

            <div class='vl'></div>
            <div class='email'>mpacampara@gmail.com</div>
        </div>
    );
}

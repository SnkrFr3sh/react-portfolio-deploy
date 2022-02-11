import React from 'react';
import '../Landing.css'
import LandingImage from '../assets/landingimg.jpg'


export default function Landing() {
    return (
        <div class='landingBody'>

            <img src={LandingImage} alt='running' class='landingImage' />
            <div class='iam'>I AM</div>
            <div class='textContainer'>
                <div class='titleFirstName'>
                    MARC
                </div>
                <div class='titleLastName'>
                    PACAMPARA
                </div>
                <div class='shadedBox'> </div>
                <div class='mediumTitle A'>WEBDEVELOPER</div>
                <div class='mediumTitle B'>CHOREOGRAPHER</div>
                <div class='mediumTitle C'>ARTIST</div>
                
            </div>

            <div class='vl'></div>
            <div class='email'>mpacampara@gmail.com</div>
        </div>
    );
}

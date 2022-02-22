import React from 'react';
// import CountButton from '../CountButton';
import '../assets/css/ArtMediums.css'


export default function ArtMediums() {
  return (
    <div>
      <section class="ArtMediumWrapper">
        <div class="ArtMediumTitleBox">
          <h3>Art Mediums</h3>
        </div>
        <div class='ArtMediumContent'>
        <div>
        <p>Photography</p>
        {/* <CountButton incrementBy={1} /> */}
        </div>
        <div>
        <p>Paper Collaging</p>
        {/* <CountButton incrementBy={5} /> */}
        </div>
        <div>

        <p>Movement & Choreography</p>
        {/* <CountButton incrementBy={10} /> */}
        </div>
        </div>
      </section>
    </div>
  );
}

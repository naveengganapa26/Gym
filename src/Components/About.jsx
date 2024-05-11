import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN ABOUT US</h1>
            <p> kjfjiodjf jdjfiad mdkfjiadsjf mkdfjiajfanij dfj
                jofjodpf ofidjfdiaj djfijdaij jaidjfa djjdfi 
                idfjid jfidjoas od ijf diao ffdifj 
            </p>
            <button>READ ME</button>
        </div>

    </div>
  )
}

export default About
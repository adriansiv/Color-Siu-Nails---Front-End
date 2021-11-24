import React from 'react'
import './AboutUs.css'

import working from '../../img/IMG_5773.jpg';

function AboutUs() {
   
    return ( 
        <>
            <div className="about-us-container">
                <div className="about-us-text-container">
                    <div className="about-us-text">
                        <h1>Sobre mí:</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, debitis accusantium quasi facilis nulla corrupti vel distinctio eum animi maxime consequatur exercitationem architecto voluptatibus ipsa deserunt nihil, vitae possimus nisi?</p>
                    </div>
                    <img src={working} alt="working"/>
                </div>
                <div className="about-us-vision-container">
                    <div className="about-us-vision">
                        <h1>Visión:</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nisi voluptate iure sit aliquam a tempora mollitia, harum ad at repudiandae officia deleniti sint dolore, sunt culpa quis debitis architecto?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;

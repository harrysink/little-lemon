import React from 'react';
import {images} from "../../../reusables";
import '.About.css';

const aboutInfo = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description: " ",
    image1: images.MarioandAdrianA,
    image2: images.restaurantchefB,
};

const About  = () => {
    return (
        <div className="about-section">
            <div className="about-description-container">
                <h1 className="about-name">{aboutInfo.title}</h1><br/>
                <h4 className="about-subname">{aboutInfo.subTitle}</h4><br/>
                <p className="about-description">{aboutInfo.description}</p>
            </div>
            <div className="about-image-container">
                <div className="about-image-container-1"
                    style= 
                    {
                        {
                            backgroundImage: `url(${aboutInfo.image2})`
                        }
                    }
                />
                <div className="about-image-container-2" 
                    style=
                    { 
                        {
                            backgroundImage: `url(${ aboutInfo.image1 })`
                        } 
                    } 
                />
            </div>
        </div>
    )
}

export default About;
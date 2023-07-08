import React from "react";
import images from "../reusables/images";
import './Footer.css';

const doormatNavItems = ["Home", "About", "Menu", "Reservation", "Order Online", "Login"];
const contactDetails = ["Address", "Phone number", "Email"];
const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];

const FooterItems = (props) => {
    return (
        <div className="footer-items" id="footer">
            <h1 className="footer-item-title">{props.sectionName}</h1>
            <ul className="footer-item-names">
                {
                    props.sectionList.map((item) => {
                        return (<li key={item}>
                            <a href={`@${item}`}>{item}</a>
                        </li>)
                    })
                }
            </ul>
        </div>
    );
};

function Footer() {
    return (
       <footer className="footer-section">
        <div className="about-image-container" 
            style=
            {
                {
                    backgroundImage: `url(${images.restaurant})`
                }
            }
        />
        <FooterItems sectionName="Doormat Navigation Items" sectionList={doormatNavItems}/>
        <FooterItems sectionName="Contact" section={contactDetails}/>
        <FooterItems sectionName="Social Media" sectionList={socialMedia}/>
       </footer>
    );
};

export default Footer;


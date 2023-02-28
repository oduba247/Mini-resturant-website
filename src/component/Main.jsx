import React from 'react'
import Footer from './Footer'
import IFrame from './IFrame'

// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className='body'>
    <div className="navigation-wrapper">

        <div className="left-column">
            <div className="icon">
                <i className="fas fa-phone-volume"></i>
            </div>

            <div className="contact-hours-wrapper">
                <div className="phone">
                    09074533554
                </div>

                <div className="hours">
                    7 AM - 7 PM
                </div>
            </div>
        </div>

        <div className="center-column">
            <div className="banner-image">
                {/* <img src="images/logos/decamp-fantastic-fries-logo-white.png" alt="Logo"> */}
            </div>

            <div className="links-wrapper"> 
                <div className="nav-link">
            
                    <a href="index.html">Home</a>
                </div>

                <div className="nav-link">
                    <a href="about.html">About</a>
                </div>

                <div className="nav-link">
                    <a href="menu.html">Menu</a>
                </div>

                <div className="nav-link">
                    <a href="contact.html">Contact</a>
                </div> 
            </div>
        </div>

        <div className="right-column">
            <div className="address-wrapper">
                {/* <i class="fas fa-map-marker-alt"></i> <a href="contact.html"> Creek Valleyway < Douglasville</a> */}
            </div>
            <div className="contact-icon">
                <a href="contact.html">
                    <i className="fas fa-map-marker-alt"></i>
                </a>

            </div>
        </div>
    </div>
    {/* Heros Section */}
    <div className="hero-section">
        <div className="top-heading">
            <h1>HTML Styled Fries</h1>
        </div>

        <div className="bottom-heading">
            <h3>Coding Fuel</h3>
        </div>
    </div>

    <div className="features-section">
        <div className="columns-wrapper">
            <div className="column">
                <i className="fas fa-truck-monster"></i>
                <p>We Deliver!</p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="column">
                <i className="fas fa-wifi"></i>
                <p>You can code from here!</p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="column">
                <i className="fas fa-chart-line"></i>
                <p>100+ types of fries!</p>

                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    </div>
    <div>
    <IFrame />
    </div>
    <Footer/>
    </div>




    
  )
}

export default Main



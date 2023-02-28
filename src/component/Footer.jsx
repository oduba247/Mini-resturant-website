import React from 'react'

const Footer = () => {
  return (
    <div>    <div className="footer">
    <div className="logo-footer">
        {/* <img src="images/logos/decamp-fantastic-fries-logo-white.png" alt="Logo"> */}
    </div>

    <div className="footer-phone-hours">
        <span className="phone">
        09074533554
        </span>

        <span className="hours">
            7 am - midnight
        </span>
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

    <div className="social-media-icons-wrapper">
        <a href="#">
            <i className="fab fa-instagram"></i>
        </a>

        <a href="#">
            <i className="fab fa-twitter"></i>
        </a>

        <a href="#">
            <i className="fab fa-facebook-f"></i>
        </a>
    </div>

</div></div>
  )
}

export default Footer
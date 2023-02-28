import React from 'react'
import Footer from './Footer'

const Menu = () => {
  return (
    <div>
        
    <div class="skewed-header">
        <div class="header-bg" style="background-image: url('images/backgrounds/menu.jpg');"></div>

        <div class="skewed-header-wrapper">
            <div class="skewed-header-content">
                <div class="heading-wrapper">
                    <h1>Menu</h1>
                </div>

                <div class="links-wrapper">
                    <div class="nav-link">
                        <a href="index.html">Home</a>
                    </div>

                    <div class="nav-link">
                        <a href="about.html">About</a>
                    </div>

                    <div class="nav-link">
                        <a href="menu.html">Menu</a>
                    </div>

                    <div class="nav-link">
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Menu Body --> */}
    <div class="squares-wrapper">
        <div class="squares">
            <div class="square">
                {/* <div class="img-wrapper">
                    <img src="images/squares/fries-sq-1.jpg" alt="Fries">
                </div> */}

                <div class="square-text-wrapper">
                    <a href="#spicy" name="Spicy" class="anchor-link">
                        <h1>SPicy</h1>
                    </a>

                    <ul>
                        <li>SOme MEnu Item...</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Eos vel dignissimos architecto sit exercitationem nostrum recusandae?</li>
                        <li>Distinctio quia accusamus, numquam rerum iste accusantium saepe.</li>
                        <li>Totam non harum et, enim ad vitae deserunt.</li>

                    </ul>
                </div>
            </div>
            <div class="square">
                <div class="square-text-wrapper">
                    <a href="#mild" name="Mild" class="anchor-link">
                        <h1>Mild.</h1>
                    </a>

                    <ol>
                        <li>Some Menu Item...</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Eos vel dignissimos architecto sit exercitationem nostrum recusandae?</li>
                        <li>Distinctio quia accusamus, numquam rerum iste accusantium saepe.</li>
                        <li>Totam non harum et, enim ad vitae deserunt.</li>

                    </ol>



                </div>

                <div class="img-wrapper">
                    {/* <img src="images/squares/fries-sq-2.jpg" alt="Fries"> */}
                </div>
            </div>
        </div>
    </div>

<Footer/>
    </div>
  )
}


export default Menu
import React from 'react'
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import sponsors from '../../../assets/Group130.png'
import img1 from '../../../assets/Group 151.png'
import img2 from '../../../assets/Group 152.png'
import './home.css'

const Home = () => {
    return (
        <>
            <header id="header">
                <nav className="home-navbar">
                    <Logo />
                    <ul>
                        <li className="list">
                            <Link to="/homepage" className="navbar">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="navbar">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="navbar">Contact</Link>
                        </li>
                        <li>
                            <Link to="/sign" className="navbar">Sign</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <h1>Be part of the millions <br/>that joined to impact the world</h1>
                    <p>Embrace our own that have different disabilities to have a better future</p>
                    <button>Find out more</button>
                </main>
            </header>
            <div id="sponsors">
                <img src={sponsors} alt="sponsors list" />
            </div>
            <section className='section-1'>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="mw-2">
                    <h2>Get to impact <br/>the world today</h2>
                    <br/>
                    <p>As Rwanda is developing, we need the society to know that, when united we are powerful and no one can defeat us</p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className='mw-4'>
                    <h2>Support <br/>inclusive societies</h2>
                    <br/>
                    <p>In the years to come we want people with disabilities to find a place in the society where they can freely express themselves and be confident of what they can do, knowing that millions of people are believing in them and are ready to support through this platform.</p>
                </div>
                <img src={img1} />
            </section>
            <section className="section-2">
            <img src={img2}/>
            </section>

            <footer class="">
    <section class="spaced link-stack">
      <div class="list-link">
        <ul>
          <li>
            <h3>Quick Links</h3>
          </li>
          <li><a href="">Home</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact Us</a></li>
         
        </ul>
      </div>
      <div class="list-link">
        <ul>
          <li>
            <h3>Social medias</h3>
          </li>
          <li>Twitter</li>
          <li>instragram</li>
          <li>Copyright@2022-Team 4</li>
          
        </ul>
      </div>
    <div id="contact">
      <div class="list-link" >
        <ul>
          <li>
            <h3>Address</h3>
          </li>
          <li><a href="">Solvit Africa</a></li>
        </ul>
      </div>
      </div>
    </section>
  </footer>
        </>
    )
};
 export default Home;



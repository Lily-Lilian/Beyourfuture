import React from "react"
import './signin.css'
import instragram from './Instagram_icon.png.webp'
import twitter from './free-twitter-logo-icon-2429-thumb.png'
import facebook from './facebook1.png'
import { Link } from "react-router-dom";


export const SignIn = () =>{

    return(
        <div id="signinContent">
            <div id="signinHeader">
            </div>
            <form action="" id="signinForm">
                <h1>SIGN IN</h1>
                
                <div className="signinInput">
                    <input type="text" placeholder="Enter your username"/>
                </div>
                <div className="signinInput">
                    <input type="password" placeholder="Enter your password"/>
                </div>
                
                <button ><Link to="/navbar" id="link">Sign in</Link></button>
                <p id="or"><hr /> OR <hr /></p>
                <div id="loginButtons">
                
            </div>
            </form>
            
            <p id="signinAlternative">Don't have an account? <span>
            <Link to="/signup" >Sign up</Link>
            </span></p>
        </div>
    );
}
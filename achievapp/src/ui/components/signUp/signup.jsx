import React from "react"
import './signup.css'
import { Link } from "react-router-dom";


export const SignUp = () =>{

    return(
        <div id="signupContent">
            <div id="signupHeader">
            </div>
            <form action="" id="signupForm">
                <h1>SIGN UP</h1>
                <div className="signupInput">
                    <input type="text" placeholder="Enter your full names"/>
                </div>
                <div className="signupInput">
                    <input type="password" placeholder="Enter your username"/>
                </div>
                <div className="signupInput">
                    <input type="password" placeholder="Enter your phone number"/>
                </div>
                <div className="signupInput">
                    <input type="password" placeholder="Enter National ID"/>
                </div>
                <button>Sign Up</button>
                <p id="or"><hr /> OR <hr /></p>
        
                <div id="loginButtons">
                
            </div>
            </form>
            

            <p id="signinAlternative">Already have an account? <span><Link to="/signin">Sign in</Link></span></p>
        </div>
    );
}
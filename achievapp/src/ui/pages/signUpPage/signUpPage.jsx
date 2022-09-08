import React from "react";
import { SignUp } from "../../components/signUp/signup";
import "./signUpPage.css";
import{ Link} from "react-router-dom";
import logo from '../signInPage/logo.png';




const SignUpPage = ()=>{

    return(
        <div id="signUpPageContent">
            <div id="signUpPageLeftSide">
            <img  className='logo'src={logo} alt=''></img>

                <SignUp/>
            </div>
            <nav className="nav">
            <ul >
                <li className="list">
                <Link to="/" className="navbar">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="navbar">Contact Us</Link>
                </li>

                <li>
                    <Link to="/login" className="navbar">Login</Link>
                </li>
                <li>
                    <Link to="/sign" className="navbar">Sign Up</Link>
                </li>
                
            </ul>
        </nav>
            <div id="signUpPageRightSide">
                <h1>Be the Part Of The Million That Joined To Impact The Wolrd </h1>
            </div>
            <div className='rectangle1'></div>
        <div className='rectangle2'></div>
        
        </div>
    );
}
export default SignUpPage;
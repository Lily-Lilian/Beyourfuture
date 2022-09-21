import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import logo from "./logo-be.png";

const signUp = () => {
  return (
    <>
    <div className="container">
        <div id="leftSide__sideBar" className="leftSide__sideBar">
        <div className="signUpPageLeftSide">
          <img className="logo" src={logo} alt=""/>
        </div>
        <form action="" id="signupForm">
          <h1 className="signup__title"><span className="create__account">Create your account</span><br/> 
          Sign Up 
          </h1>
          <div className="signupInput">
            <input type="text" placeholder="Enter your full names" />
            <input type="password" placeholder="Enter your username" />
            <input type="password" placeholder="Enter your phone number" />
            <input type="password" placeholder="Enter National ID" />
            <button>Finish</button>
          </div>
         
        </form>
      </div>
      <div id="signUpPageContent" className="signUpPageContent">
        <nav className="navigation">
          <ul>
            <li className="list">
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/login" className="navbar">
                Login
              </Link>
            </li>
            <li>
              <Link to="/sign" className="navbar">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rectangle__flex">
            <span className="rectangle1"></span>
        </div>
        <div className="rectangle__center">
        <h1>Be the Part Of The Million That Joined To Impact The Wolrd </h1>
        </div> 
        <div className="rectangle__flex">
            <span className="rectangle"></span>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default signUp;

import React from "react";
import { SignIn } from "../../components/signin/signin";
import logo from '../signInPage/logo.png';
import "./signInPage.css";
import{ Link} from "react-router-dom";



let SignInPage = ()=>{

    return(
        <div id="signInPageContent">            
            <div id="signInPageLeftSide">
            <img  className='logo'src={logo} alt=''></img>
                <SignIn/>
            </div>
            <div id="signInPageRightSide">
            <nav className="nav">
            <ul >
                <li className="list">
                <Link to="/" className="navbar">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="navbar">Contact</Link>
                </li>
                <li>
                    <Link to="/sign" className="navbar">Sign</Link>
                </li>

            </ul>
        </nav>
        <div className="header"><h1>We are Strong when we are together</h1></div>
        <div className='rectangle1'></div>
        <div className='rectangle2'></div>
      
        <footer>
      <p className='footer'>Copyright&copy;2022-Team4</p>
    </footer>

            </div>
            
            
        </div>
    );
}

export default SignInPage;

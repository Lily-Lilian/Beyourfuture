import React from 'react'
import {ReactComponent as Logo} from '../../../assets/logo.svg'
import { Link } from "react-router-dom"
import './home.css'

const Home = () => {
    return (
    <div id='top'>
    <img src={Logo} alt=''></img>
<div id='link'>
<nav className="nav">
            <ul >
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
        </div>
        </div>
    )
};
 export default Home;



import React from "react"
import "./navSide.css"
import logo from "./logo.png"
import {AiFillHome,AiFillMessage} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {BsFillBookmarkDashFill} from "react-icons/bs"
import {MdSettings} from "react-icons/md"
import { Link } from "react-router-dom";


export const NavSide = () =>{

    return(
        <div id="leftSide">
             <header id="left_side_header" className="left_side_section">
                    <div> <span id="logo"><img src={logo}  /></span> <span>Be Part Of The Millions That Joined To Impact The World </span></div>
                    <h3>Menu</h3>
                    
            </header>
            <section id="left_side_first_section" className="left_side_section">
                <ul id="left_side_menu">

                    <li className="hey"><AiFillHome size="1.3em" /><Link to="/navbar" className="navLinks">Home</Link></li>
                    <li className="hey"><AiFillMessage size="1.3em"/><Link to="/navbar" className="navLinks">Messages</Link></li>
                    <li className="hey"><CgProfile size="1.3em"/> <Link to="/navbar" className="navLinks">Profile</Link></li>
                    <li className="hey"><BsFillBookmarkDashFill size="1.3em"/><Link to="/navbar" className="navLinks">Bookmark</Link></li>
                    <li className="hey"><MdSettings size="1.3em"/><Link to="/navbar" className="navLinks">settings</Link></li>
                
                </ul>
            </section>
        </div>
    );
}

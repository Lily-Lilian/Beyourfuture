import React from 'react'
import "./mainCard.css"
import man from "./man.jpeg"
import { BsThreeDots } from "react-icons/bs"
import { BiLike } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa"
 
export const MainCard = () => {
  return (
    <div id='maincardContent'>
        <div  id='maincardHeader'>
            <span><img src={man} alt="" /></span>
            <header>
                <h3>Naomi Yashida</h3>
                <h5>1 hour ago</h5>
            </header>
            
            <span id='maincardIcon'><BsThreeDots/></span>
        </div>
        <div id='maincardPost'>
            <p>“Business ideas are sensitive to market conditions, culture, technological development and other things. What maybe was a bad business idea ten years ago may be a great business idea today. Give it a try. Mayflower Plymouth.”</p>
        </div>
        <div id='maincardLike'>
            <span><BiLike/>&nbsp;&nbsp;100likes</span>
            <span><FaRegComment/>&nbsp;&nbsp;98 comments</span>
        </div>
        <div id='maincardUserComment'>
            <span><img src={man} alt="" /></span>
            <input type="text" placeholder='Write your comment'/>
        </div>
        <div id='maincardComment'>
            <span><img src={man} alt="" /></span>
            <div>
                <h3>Ismael bin Mail</h3>
                <p>“When we invest, It’s about the big picture, and having a holistic approach to investing”</p>
            </div>
            
        </div>
        <div id='maincardLoadComment'>
            <button>view All Comments</button>
            {/* <Link><view All Comments</Link> */}
        </div>
        
    </div>
  )
}

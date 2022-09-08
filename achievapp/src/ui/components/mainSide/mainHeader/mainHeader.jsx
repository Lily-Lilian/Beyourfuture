import React from 'react'
import "./mainHeader.css"
import {BsSearch } from "react-icons/bs"

export const MainHeader = () => {
  return (
        <div id='mainheaderSearch'>
            <input type="text" placeholder='Search'/>
            <span><BsSearch /></span>
        </div>
  )
}

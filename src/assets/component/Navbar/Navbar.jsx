// import React from 'react'
import { BsMoonStarsFill  } from "react-icons/bs";
import "./Navbar.css"
function Navbar() {
  return (
    <>
        <div className="container">
            <div className="nav">
                <p>AHMED A.</p> 
                <div className="resume">
                    <BsMoonStarsFill className="icon" />
                    <button className="resume-btn">resume</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar

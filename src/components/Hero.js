import React from "react";
import img1 from "./image1.png";


export default function Hero() {
    return(
        <div className="hero">

            <div className="dp">
              <img id="grid" src={img1} alt="" />
            </div>

            <div className="description">
              <h1 id="heading">Online Experiences</h1>
              <p id="desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>

        </div>
    )
    
}
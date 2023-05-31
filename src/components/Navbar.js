import React from "react"
import imagenav from "./airbnb.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img id="airbnb" src={imagenav} alt="airbnb logo"/>
        </nav>
    )
}
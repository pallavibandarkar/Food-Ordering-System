import React from "react";
import "./Navbar.css"
import {assets} from "../../assets/assets.js"

export default function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar-info">
                <div className="admin">
                   <img className="logo" src={assets.logo} />
                   <p><b>Admin Panel</b></p>
                </div>
                <img src={assets.profile_icon} className="profile_icon"/>
            </div>
        </div>
    )
}
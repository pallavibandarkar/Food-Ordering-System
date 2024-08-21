import React from "react";
import "./Sidebar.css"
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img className="ad-icons" src={assets.add_icon_white}/>
                    <p>Add item</p>
                </NavLink>
                <NavLink to="/list" className="sidebar-option">
                    <h3><i className="fa-solid fa-cart-shopping ad-icons"></i></h3>
                    <p>List Items</p>
                </NavLink>
                <NavLink to="/orders" className="sidebar-option">
                    <h3><i className="fa-solid fa-cart-shopping ad-icons"></i></h3>
                    <p>Orders</p>
                </NavLink>
            </div>

        </div>
    )
}
import React, { useState, useEffect } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import Logo from "../Logo.PNG";


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <img className="logo" src={Logo} />
      </Link>
      
      <ul>
        <li>
          <Link className="navLink" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

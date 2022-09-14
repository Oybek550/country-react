import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import './navbar.css';
const navbar = () => {
  return(
    <div className="nav">
      <div className="search">
        <i><AiOutlineSearch/></i>
        <input type="text" placeholder="Search for a country…" />
        </div>
    
      <div className="dropdown">
        <div className="select">
          <div className="selected">Filter by Region</div>
          <div className="caret"></div>
        </div>
        <ul className="menu">
          <li><a>Africa</a></li>
          <li><a>America</a></li>
          <li><a>Asia</a></li>
          <li><a>Europe</a></li>
          <li><a>Oceania</a></li>
        </ul>
      </div>
    </div>
  )
}

export default navbar;
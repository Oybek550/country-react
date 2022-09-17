import React, {useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import './navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className="nav">
      <div className="search">
        <i><AiOutlineSearch/></i>
        <input type="text" placeholder="Search for a country…" />
        </div>
    
        <div className="dropdown" >
    <div className="select" onClick={()=>{setOpen(!open)}}>
      <div className="selected" >Filter by Region</div>
      <div className="caret" ></div>
      
       
    </div>
 
 <ul className={open ? "menu" : "close"}>
    <li><a href=''>Africa</a></li>
    <li><a href=''>America</a></li>
    <li><a href=''>Europa</a></li>
    <li><a href=''>Osia</a></li>
    <li><a href=''>Oceania</a></li>
    
  </ul>

 
  </div>
    
    </div>
  )
}

export default Navbar;
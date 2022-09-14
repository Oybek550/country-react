import React from "react";
import './top.css';
import {BsMoon} from "react-icons/bs";


const top =() => {
  return (
    <div className="main">
      <div >
        <h2>Where in the world?</h2>
        </div>
      <div> 
        
         <p> <i><BsMoon/></i> Dark mode</p>
      </div>
    </div>
  )
}

export default top;
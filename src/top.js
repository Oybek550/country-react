
import './top.css';

import { Link } from "react-router-dom";
import {useState } from 'react';


const Top =(props) => {
 

  return (

    <div className={props.dark ?"main" :"dark"}>
      <div >
        <h2>Where in the world?</h2>

        </div>
      <div> 
        
         <p> <i>{props.moon}</i>Dark mode</p>
      </div>
    </div>
  )
}

export default Top;
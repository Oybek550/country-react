import  {useState,useEffect} from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import './navbar.css';
import Show from './show';
import { Link } from 'react-router-dom';
import Region from './region';
const url = 'https://restcountries.com/v2/all'

const Navbar = (props) => {
   
   const [reg,setReg] = useState();
   const [inf,setInf] = useState();
   const [search, setSearch] = useState();
   
   const country = async() => {
      const response = await fetch(url)
      const data = response.json()
     
     
      
   }
    
   const searchcountry = async (x) => {
       const val =  x.target.value
      if(val.length < 3) 
      return
         const response = await fetch(`https://restcountries.com/v2/name/${val}`)
         const data = response.json()
         setReg(data)
  
   }

   const handlebar = (e) => {
      setInf(e.target.value) 
     
   }

   const information = async () => {
    const response = await fetch(`https://restcountries.com/v2/${inf}`)
     const data = await response.json();
     setReg(data)
   

   }
useEffect(() => {
   country()
 searchcountry()
 information();
},[inf])

  return(<>
    <div className={props.dark ?"nav ":"nav-dark"}>
       <div className={props.dark ?"search":"search-dark"}>
        <i className= {props.dark?'':'icon-search'}><AiOutlineSearch/></i>
        <input type="text" className={props.dark ? "": "dark-input"} placeholder="Search for a country…" 
        onChange={searchcountry} />
        </div>
   
        <div className="dropdown" >
           <select className={props.dark ? "select" : "dark-select"} value={inf} onChange={handlebar} >
            <option selected value="" >Filter by Region</option>
            <option value="region/africa">Africa</option>
            <option value="region/america">America</option>
            <option value="region/asia">Asia</option>
            <option value="region/europa">Europe</option>
            <option  value="region/oceania">Oceania</option>
           </select>
        </div>
    </div>
    
    <div >
    <Region reg={reg} />
    </div>
      
     

  </>
  )
}

export default Navbar;
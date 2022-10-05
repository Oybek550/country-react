import  {useState,useEffect} from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import './navbar.css';
import Show from './show';
import { Link } from 'react-router-dom';
import Region from './region';
const url = 'https://restcountries.com/v2/all'
const Navbar = () => {
   
   const [reg,setReg] = useState();
   const [inf,setInf] = useState();
   const [search, setSearch] = useState();
    
   const searchcountry = async (e) => {
       const val = e.target.value
      if(val.length < 3) 
      return
         const response = await fetch(`https://restcountries.com/v2/name/${val}`)
         const data = response.json()
          setSearch(data)
        
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
 searchcountry()
 information();
},[inf])

  return(<>
    <div className="nav">
       <div className="search">
        <i><AiOutlineSearch/></i>
        <input type="text" placeholder="Search for a country…" 
        onChange={searchcountry} />
        </div>
    
        <div className="dropdown" >
           <select value={inf} onChange={handlebar}>
            <option selected value="all" >Filter by Region</option>
            <option value="region/africa">Africa</option>
            <option value="region/america">America</option>
            <option value="region/asia">Asia</option>
            <option value="region/europa">Europe</option>
            <option  value="region/oceania">Oceania</option>
           </select>
        </div>
    </div>
    
  

  </>
  )
}

export default Navbar;
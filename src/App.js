import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  Top  from "./top";
import Show from './show';
import Country from './country';
import Navbar from './navbar';
import './App.css'
import Region from './region';
import { useState } from 'react';
import {BsMoon} from "react-icons/bs";



function App() {
  const [dark,setDark] = useState(true)
  const moon = <i className='moon' onClick={()=>setDark(!dark)}>< BsMoon/></i>
  return (
<div className={dark?'container':'container-dark'}>
 
   <BrowserRouter>
<Top dark={dark} moon={moon}/>
<Navbar dark={dark}/>
 
 <Routes>
  
   <Route >
       <Route path='region' element={<Region/>}></Route>
   </Route>
 
  <Route  path="navbar/:parametr"  element={<Show />}></Route>

 

 </Routes>
 
 </BrowserRouter>

 </div>

  );

}

export default App;

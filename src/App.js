import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  Top  from "./top";
import Show from './show';
import Country from './country';
import Navbar from './navbar';
import './App.css'
import Region from './region';

function App() {

  
  return (
<div className='container'>
   <BrowserRouter>
<Top/>
<Navbar />
 
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

import {useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import './region.css'

const Region = (props) => {
const reg = props.reg
return (<>
 
  {reg.map((item) => {
    const {name} = item
 return  <article  key={item.alpha2Code}>
 <img src={item.flags.png}></img>
  <p>{item.population}</p>
     <p>{item.region}</p>
     <p>{item.capital}</p>;
     <Link to={`/${name}`} >learn more</Link>
 </article> 
})}
 
</>)
}
export default Region;
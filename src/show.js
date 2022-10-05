import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import './Show.css'


const Show =() => {
const [names, setNames] =useState()
const { parametr } = useParams()

useEffect(() => {
  const getname = async () => {
    const response = await fetch(`https://restcountries.com/v2/name/${parametr}`) 
    const data = await response.json()
    setNames(data)
    console.log(names);
 }
  getname()
},[])

return(
  <h1>show</h1>
)

}
export default Show;
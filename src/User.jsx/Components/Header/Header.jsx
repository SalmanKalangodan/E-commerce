import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Header() {
  const [data,setData] =useState()
  const [count,setCount] =useState()
useEffect(()=>{
  axios.get("http://localhost:3000/products").then((ref)=>{
    setCount(Math.round(Math.random()*10))
    setData(ref.data[count])

  })
},[count])
  return (
    <div className="banner"style={{backgroundImage: `url(${data ? data.img:''})`}}>  
    <div className='shoe-title'><h1>{data ? data.name:""}</h1></div>
    <div className='dis'><p>{data ? data.discretion: ""}</p></div>
    <div className='header-buttons'>
  <Link to={'/cart'} ><button className="btn btn-ghost btn-outline header-button">Go Cart</button></Link>
    {/* <button className="btn btn-ghost btn-outline header-button">Buy Now</button> */}
    </div>
  </div> 
  )
}

export default Header
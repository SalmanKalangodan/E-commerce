import React, { useEffect, useState } from 'react'
import './Header.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  // const [data, setData] = useState()
  const [count, setCount] = useState()
  
  useEffect(() => {
    // axios.get("http://localhost:3000/products").then((ref) => {
      setCount(Math.round(Math.random() * 10))
      // setData(ref.data[count])
  })
  const data =useSelector((state)=>state.ApiSlice.data[count])
  return (
    <div className="banner bg-origin-border" style={{ backgroundImage: `url(${data ? data.img : ''})` }}>
      <div className='w-96  ml-6  rounded h-lg p-10  '>
        <div className='shoe-title '><h1 className='text-black'>{data ? data.name : ""}</h1></div>
        <div className='dis'><p className='text-black'>{data ? data.discretion : ""}</p></div>
        <div className='header-buttons'>
          {/* <Link to={'/cart'} ><button className="btn btn-primary btn-outline header-button">Go Cart</button></Link> */}
        </div>
        {/* <button className="btn btn-ghost btn-outline header-button">Buy Now</button> */}
      </div>
      <div className='bg-black-200'></div>
    </div>
  )
}

export default Header
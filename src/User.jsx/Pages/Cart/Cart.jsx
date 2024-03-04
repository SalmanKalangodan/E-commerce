import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Cart.css'
import axios from 'axios'
function Cart() {
  // const {data} =useContext(Cartcontext)
  const [data ,setData] =useState()
useEffect(()=>{
  axios.get("http://localhost:3000/cart").then((ref)=>{
    setData(ref.data)
  })
},[])
  console.log(data);
  return (
    <>
    <Navbar />
    {data&&data.map((value, index )=>{
     return(
      <div className="hero bg-base-200" key={index}>
      <div className="hero-content flex-col lg:flex-row">
        <img src={`${value.img}`} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{value.name}</h1>
          <p className="py-6">{value.discretion}</p>
          <h1>{value.price}</h1>
          <h1 className="text-3xl font-bold">Qnt : 1</h1>
          <br />
         <div className='flex main-btn'>
        <div><button className="btn btn-primary">+</button></div>
        <div><button className="btn btn-primary">-</button></div>
        <div><button className="btn btn-primary">delete</button></div>
          </div>
        </div>
      </div>
    </div>
     )
    })}
<div className='subtotal-main bg-base-200'>
  <div className='subtotal-sub'><h1 className="text-3xl font-bold">Subtotal (3 items):$ 2000</h1></div>
</div>
<div className='subtotal-main bg-base-200'>
<div className='subtotal-sub' ><button className="btn btn-primary">Proceed to Buy</button></div>
</div>

  <Footer />
  </>
  )
}

export default Cart
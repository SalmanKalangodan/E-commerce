import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import './Product.css'
import axios from 'axios'
import { Cartcontext } from '../../Context/CartContext'

function Product() {
  const {cart , setCart} =useContext(Cartcontext)
  const id =useParams()
   const [state,setState] =useState([])
    axios.get("http://localhost:3000/products").then((ref)=>{
      ref.data.map((value)=>{
      if(value.id===id.id){
        setState(value)
      }
      })
     })
  return (
    <div>
        <Navbar />
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={`${state.img}`} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{state.name}</h1>
      <p>Men's Shoe</p>
      <br />
      <h1 className="text-4xl">{state.price}</h1>
      <br />
      <div className='flex justify-between size-pro'>
      <p className='text-2xl'>Size :</p>
      <button className="btn btn-outline btn-info">8</button>
      <button className="btn btn-outline btn-info">9</button>
      <button className="btn btn-outline btn-info">10</button>
      <button className="btn btn-outline btn-info">11</button>
      </div>
      <p className="py-6">{state.discretion}</p>
      <button className="btn btn-primary" onClick={()=>setCart(state)}>Add Cart</button>
    </div>
  </div>
</div>
<Footer />
    </div>
  )
}

export default Product
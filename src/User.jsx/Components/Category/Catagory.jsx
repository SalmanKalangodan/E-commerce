import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Catagory() {
    const {category} =useContext(Cartcontext)
    const [state,setState]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/products").then((ref)=>{
            setState(ref.data)
        })
    },[])
  return (
    <>
    <Navbar />
    <div className='flex flex-wrap gap-10 justify-evenly'>
   {state&&state.map((value,index)=>{
    if(value.category.includes(category)){
      return(
      <div className="card w-96 bg-base-50 shadow-xl gap-2">
      <figure><img src={value.img} alt="Shoes" className='rounded-xl' /></figure>
      <div className="card-body">
        <h2 className="">{value.name}</h2>
        <div><h2>MRP:${value.price}</h2></div>
        <div className="card-actions justify-center">
        <Link to={`/product/${value.id}` } className="btn btn-primary">More</Link>
        </div>
      </div>
    </div>
        )
    }

   })}
   </div>
   </>
  )
}

export default Catagory
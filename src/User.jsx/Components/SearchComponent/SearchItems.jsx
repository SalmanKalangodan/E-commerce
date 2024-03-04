import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../../Context/CartContext'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Cards from '../Cards/Cards'
import Product from '../../Pages/Product/Product'
import './SearchItem.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function SearchItems() {
const {search} =useContext(Cartcontext)
const [state ,setState] =useState()
const searchd= search.toLowerCase()
const navigate =useNavigate()
useEffect(()=>{
    axios.get("http://localhost:3000/products").then((ref)=>{
     setState(ref.data)
    })
},[])
console.log(state);
  return (
    <>
    <Navbar />
    {state&&state.map((value ,index)=>{
       if(value.name.toLowerCase().includes(searchd)){
         return(
            <div key={index} className='card-main'>
            <div className='flex main-con'>
          <div className="card w-96 bg-base-50 shadow-xl card-main ">
          <figure><img src={value.img} alt="Shoes" className='img-width' /></figure>
          <div className="card-body">
            <h2 className="">{value.name}</h2>
            <div><h2>{value.price}</h2></div>
            <div className="card-actions justify-end">
            <button className="btn btn-ghost" onClick={()=>navigate(`/product/${value.id}`)}>More</button>
            </div>
          </div>
        </div>
        </div>
        </div>
         )
       }
    })}
    <Footer />
    </>
  )
}

export default SearchItems
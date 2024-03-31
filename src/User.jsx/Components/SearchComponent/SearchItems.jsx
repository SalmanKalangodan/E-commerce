import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../../Context/CartContext'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import './SearchItem.css'
import { Form, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import  './SearchItem.css'
import { useSelector } from 'react-redux'

function SearchItems() {
// const [state ,setState] =useState()
const navigate =useNavigate()
const data =useSelector((state)=>state)
const searchd= data.SearchSlice.Searchs.toLowerCase()
const state = data.ApiSlice.data
useEffect(()=>{
    // axios.get("http://localhost:3000/products").then((ref)=>{
    //  setState(ref.data)
    // })
},[])
  return (
    <div>
    <Navbar />
    <div className='flex flex-wrap gap-10 justify-evenly'>
    {state&&state.map((value ,index)=>{
       if(value.name.toLowerCase().includes(searchd)||value.category.includes(searchd)){
         return(
            <div key={index} className=''>
            <div className='main-con'>
          <div className="card w-96 bg-base-50 shadow-xl gap-2">
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
    </div>
    <Footer />
    </div>
  )
}

export default SearchItems
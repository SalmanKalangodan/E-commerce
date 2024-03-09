import {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Cards.css'

function Cards() {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then((ref)=>setData(ref.data))
  },[])
  return (
    <>
    <h1 className='text-center'> Products </h1> 
    <div className='flex flex-wrap gap-10 justify-evenly'>
    {data.map((value,index)=>{
        return(
            <div key={index} className=''>
        <div className=''>
      <div className="card w-96 bg-base-50 shadow-xl card-main ">
      <figure><img src={value.img} alt="Shoes" className='img-width' /></figure>
      <div className="card-body">
        <h2 className="">{value.name}</h2>
        <div><h2>MRP:${value.price}</h2></div>
        <div className="card-actions justify-center">
        <Link to={`/product/${value.id}` } className="btn btn-primary">More</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
        )
    })}
    </div>
    </>
  )
}

export default Cards
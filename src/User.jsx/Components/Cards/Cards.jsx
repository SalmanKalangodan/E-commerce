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
    <div className='flex con'>
    {data.map((value,index)=>{
        return(
            <div key={index} className='card-main'>
        <div className='flex main-con'>
      <div className="card w-96 bg-base-50 shadow-xl card-main ">
      <figure><img src={value.img} alt="Shoes" className='img-width' /></figure>
      <div className="card-body">
        <h2 className="">{value.name}</h2>
        <div><h2>{value.price}</h2></div>
        <div className="card-actions justify-end">
        <Link to={`/product/${value.id}`} ><button className="btn btn-ghost">More</button></Link>
        </div>
      </div>
    </div>
    </div>
    </div>
        )
    })}
    </div>
  )
}

export default Cards
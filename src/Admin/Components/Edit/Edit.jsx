import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const [name ,setName] =useState('')
    const [price,setPrice] =useState('')
    const [img,setImg] =useState('')
    const [discretion, setDiscretion] =useState('')
    const [category,setCategory] =useState("")
    const [Products ,setProducts] =useState([])
    const navigate =useNavigate()
    const Proid=localStorage.getItem("proid")
    console.log(Proid);
    useEffect(()=>{
        axios.get(`http://localhost:3000/products`).then((ref)=>{
           ref.data.map((value)=>{
            if(value.id==Proid){
                setName(value.name)
                setPrice(value.price)
                setImg(value.img)
                setDiscretion(value.discretion)
                setCategory(value.category)
            }
           })

        })
    },[])
    const HandlePost=()=>{
        axios.patch(`http://localhost:3000/products/${Proid}`,{name,price,img,discretion,category}).then(alert('Edited')).then(navigate('/admin'))
    }
  return (
    <div>
         <Navbar />
    <div className='justify-center'>
    <div className="shrink-0 w-full max-w-l shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" className="input input-bordered" required value={name}  onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" className="input input-bordered" required value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="IMG URL" className="input input-bordered" required value={img} onChange={(e)=>setImg(e.target.value)} />
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Details" className="input input-bordered" required value={discretion} onChange={(e)=>setDiscretion(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="category" className="input input-bordered" required value={category} onChange={(e)=>setCategory(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={HandlePost} >Post</button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Edit
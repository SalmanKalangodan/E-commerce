import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

function Post() {
    const [name ,setName] =useState ("")
    const [price , setPrice] =useState()
    const [img,setUrl] =useState ("")
    const [discretion,setDetails]=useState("")
    const [category ,setCategory] =useState("")
    const HandlePost=(e)=>{
        e.preventDefault()
        if(name.length>=5&&img.length>=5&&discretion.length>=5){
          axios.post('http://localhost:3000/products',{name ,price ,img , discretion,category}).then(alert('Posted')).then(()=>{
            window.location.reload()
          })
        }else{
          alert('fill')
        }
       
    }
  return (
    <>
    <Navbar />
    <div className='justify-center'>
    <div className="shrink-0 w-full max-w-l shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" className="input input-bordered" required onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" className="input input-bordered" required onChange={(e)=>setPrice(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="IMG URL" className="input input-bordered" required onChange={(e)=>setUrl(e.target.value)} />
          <label className="label">
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Details" className="input input-bordered" required onChange={(e)=>setDetails(e.target.value)}/>
          <label className="label">
          </label>
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="category" className="input input-bordered" required onChange={(e)=>setCategory(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={HandlePost} >Post</button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default Post
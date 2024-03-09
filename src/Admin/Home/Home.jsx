import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
  const [products,setProducts]=useState([])
  const [id,setId]=useState()
  const navigate =useNavigate()
   useEffect(()=>{
    axios.get('http://localhost:3000/products').then((ref)=>{
        setProducts(ref.data)
    })
   })
   const HandleEdit=(id)=>{
   localStorage.setItem("proid",id)
   navigate('/admin/edit')
   }
  return (
    
    <div>
      <Navbar />
{products&&products.map((value,index)=>{
    return( <div className="overflow-x-auto" key={index}>
     <table className="table">
        <thead>
         <tr>
           <th>
             <label>
               
             </label>
           </th>
           <th></th>
           <th>Name</th>
           <th>Discretion</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>
       <tr>
        <th>
          <label>
            <div className='flex gap-2' >
            <button className='btn btn-primary' onClick={()=>axios.delete(`http://localhost:3000/products/${value.id}`).then(alert('deleted'))}>Delete</button>
            <button className='btn btn-primary' onClick={()=>HandleEdit(value.id)}>Edit</button></div>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={value.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            </div>
            </td>
            <th>{value.name}</th>
            <th>{value.discretion}</th>
            <th>MRP:${value.price}</th>
            </tr>
            </tbody>
            </table>
            
            </div>
            )
})}
<br />
<br />
<div className='flex justify-center'>
<Link to='/admin/post' className='btn btn-primary justify-center'>Add Products</Link>
</div>
<br /><br /><br /><br /><br /><br />
<Footer />
    </div>
  )
}

export default Home
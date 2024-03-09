import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Cartcontext } from '../../Context/CartContext'
import './Navbar.css'
import axios from 'axios'


function Navbar() {
  const navigate =useNavigate()
   const {setSearch} =useContext(Cartcontext)
   const login =localStorage.getItem('id')
   const [name,setName] =useState('')
   const [email,setEmail] =useState('')
   const {setCategory} =useContext(Cartcontext)
   useEffect(()=>{
    axios.get('http://localhost:3000/users').then((ref)=>{
      ref.data.map((value)=>{
        if(value.id===login){
          setName(value.firstname)
          setEmail(value.id)
        }
        
        
      })
    })
   })
   const Logout=()=>{
      localStorage.clear()
      navigate('/')
   }
   const HandleCategory=(category)=>{
     setCategory(category)
     navigate('/category')
   }
  return (
    <div className='flex navbar bg-base-100 gap-2'>
       <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a onClick={()=>HandleCategory("men")}>Men</a></li>
      <li><a onClick={()=>HandleCategory("women")}>Women</a></li>
      <li><a onClick={()=>HandleCategory("kids")}>Kids</a></li>
      </ul>
    </div>
    <Link to={"/"}> <a className="btn btn-ghost text-xl">SHOEPRO</a></Link>
  </div>
  <div className="navbar-end ">
  <div className="flex gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={(e)=>setSearch(e.target.value)} onClick={()=>navigate('/search')}/>
    </div>
  <div className="flex">
  {{...login===email?<div className="dropdown dropdown-end" >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content  bg-base-100 shadow ">
        <div className="card-body">
          <div className="card-actions center">
        <Link to="/cart" className="btn btn-primary btn-block justify-center">View cart</Link>
          </div>
        </div>
      </div>
    </div >:<div></div>}}
    
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-200">
      {{...login===email?<div> <h1>{name}</h1>
      <button onClick={Logout} className='btn btn-primary mt-3'><li >Logout</li></button>
      </div>
  :  <div className='flex mt-3 gap-1'>
  <Link to={'/login'}><button className="btn btn-active btn-primary btn-sm ">Login</button></Link>
  <Link to={'/sign'}> <button className="btn btn-active btn-primary btn-sm ">Sign</button></Link>
  </div>}}
  
    
      </ul>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Navbar
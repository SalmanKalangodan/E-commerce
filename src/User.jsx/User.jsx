import React, { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Sign from './Pages/Sign/Sign'
import Home from './Pages/Home/Home'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'
import { Cartcontext } from './Context/CartContext'
import SearchItems from './Components/SearchComponent/SearchItems'
import Admin from '../Admin/Admin'
import Catagory from './Components/Category/Catagory'
function User() {
  const [search ,setSearch] =useState("")
  const [count,setCount] =useState(1)
  const [prid , SetPrid] =useState()
  const [category,setCategory] =useState("")

  return (
    <>
    <Cartcontext.Provider value={{search , setSearch , count ,setCount , prid ,SetPrid,category,setCategory}}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<Product />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/search' element={<SearchItems />} />
            <Route path='/category' element={<Catagory />} />
            <Route path='/admin/*' element= {<Admin />} />
        </Routes>
        
        </Cartcontext.Provider>
        </>
  )
}


export default User
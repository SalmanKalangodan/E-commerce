import React, { useState } from 'react'
import { Route ,Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Sign from './Pages/Sign/Sign'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Payment from './Pages/Payment/Payment'
import { Cartcontext } from './Context/CartContext'
import SearchItems from './Components/SearchComponent/SearchItems'
function User() {
  const [search ,setSearch] =useState("")

  console.log(search);
  return (
    <>
    <Cartcontext.Provider value={{search , setSearch }}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<Product />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/search/' element={<SearchItems />} />
        </Routes>
        </Cartcontext.Provider>
        </>
  )
}


export default User
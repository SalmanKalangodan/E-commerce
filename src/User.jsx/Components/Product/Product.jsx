import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { AddCart, GetProductsId } from '../../../Redux/ApiSlice/Tunk/Tunk'
// import { add } from '../../../Redux/ApiSlice/ApiSlice'

function Product() {
  const navigate = useNavigate()
  const uid = localStorage.getItem('id')
  const Pid = useParams()
  // const [cart, setCart] = useState()
  // const [state, setState] = useState([])
  const [count, setCount] = useState(1)
  // const [usercart, setUserCart] = useState([])
  const [carti, setCarti] = useState()
  const dispacth =useDispatch()
 
 const cart = useSelector((state)=>state.ApiSlice.userId)
 const usercart =cart.Cart
  useEffect(() => {
   
    // axios.get(`http://localhost:3000/users/${uid}`).then((ref) => {
    //   setCart(ref.data)
    //   setUserCart(ref.data.Cart)
    // })
    dispacth(GetProductsId(Pid.id))
  }, [])
  useEffect(() => {
  

  }, [])
  const state = useSelector((state)=>state.ApiSlice.ProductId)

  useEffect(() => {
    usercart && usercart.map((value) => {
      if (value.id === Pid.id) {
        setCarti(value.id)
      }
    })
  }, [])


  const Handle =  () => {
    if (uid) {
      const carts = [...usercart, { ...state, count }]
      dispacth(AddCart({uid , cart,carts}))
      // axios.patch(`http://localhost:3000/users/${uid}`, { ...cart, Cart: carts })
      //   .then(alert("Added")).then(window.location.reload())
    } else {
      alert('please login')
    }

  }

  const De = () => {
    if (count == 1) {
      setCount(count + 1)
    }
    setCount(pvr => pvr - 1)
  }

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={`${state.img}`} className="max-w-xs rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{state.name}</h1>
            <p>{state.category}'s Shoe</p>
            <br />
            <h1 className="text-4xl">${state.price * count}</h1>
            <br />
            <div>Qnt :{count}</div>
            <br />
            <div className='flex main-btn justify-start gap-3'>
              <div><button className="btn btn-primary" onClick={() => setCount(pvr => pvr + 1)} >+</button></div>
              <div><button className="btn btn-primary" onClick={De}>-</button></div>
            </div>
            <p className="py-6">{state.discretion}</p>
            {{ ...carti !== Pid.id ? <button className="btn btn-primary" onClick={() => Handle(state.id)}>Add Cart</button> : <Link to='/cart'><button className="btn btn-primary">Go to the cart</button></Link> }}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product
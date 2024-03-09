import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import './Product.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

function Product() {
  const navigate =useNavigate()
 const uid =localStorage.getItem('id')
  const Pid =useParams()
  const [cart , setCart] = useState()
   const [state,setState] =useState([])
   const [count , setCount] =useState(1)
   const [usercart , setUserCart] =useState([])
   const [carti,setCarti]=useState()
   useEffect(()=>{
    axios.get(`http://localhost:3000/users/${uid}`).then((ref)=>{
          setCart(ref.data)
          setUserCart(ref.data.Cart)
   })
   
 },[])
   useEffect(()=>{
    axios.get("http://localhost:3000/products").then((ref)=>{
      ref.data.map((value)=>{
      if(value.id===Pid.id){
        setState(value)
      }
      })
     })
   },[])
   useEffect(()=>{
    usercart&&usercart.map((value)=>{
      if(value.id===Pid.id){
      setCarti( value.id)
      }
    })
   },[usercart])
  

   const Handle =()=>{
    if(uid){
    const carts =[...usercart,{...state,count}]
      axios.patch(`http://localhost:3000/users/${uid}`,{...cart,Cart:carts})
      .then(alert("Add")).then(window.location.reload())
    }else{
      alert('please login')
    }
    
   }

     const De=()=>{
      if(count==1){
        setCount(count+1)
      }
      setCount(pvr=>pvr-1)
     }
   
  return (
    <div>
        <Navbar />
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={`${state.img}`} className="max-w-xs rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{state.name}</h1>
      <p>Men's Shoe</p>
      <br />
      <h1 className="text-4xl">Price :MRP:${state.price*count}</h1>
      <br />
      <div>Qnt :{count}</div>
      <br />
      <div className='flex main-btn justify-start gap-3'>
            <div><button className="btn btn-primary" onClick={()=>setCount(pvr=>pvr+1)} >+</button></div>
            <div><button className="btn btn-primary" onClick={De}>-</button></div>
              </div>
      <p className="py-6">{state.discretion}</p>
      {{...carti!==Pid.id?<button className="btn btn-primary" onClick={()=>Handle(state.id)}>Add Cart</button>:<Link to='/cart'><button className="btn btn-primary">Go to the cart</button></Link>}}
   
      
    </div>
  </div>
</div>
<Footer />
    </div>
  )
}

export default Product
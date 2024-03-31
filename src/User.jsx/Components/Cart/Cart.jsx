import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Cart.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCart } from '../../../Redux/ApiSlice/Tunk/Tunk'


function Cart() {
  const navigate = useNavigate()
  // const [data, setData] = useState([])
  const uid = localStorage.getItem('id')
  const [item, setItems] = useState()
  // const [del, setDel] = useState()
  const datas = useSelector((state)=>state.ApiSlice.userId)
const data =datas.Cart
const dispacth =useDispatch()
  useEffect(() => {
    // axios.get(`http://localhost:3000/users/${uid}`).then((ref) => {
    //   setData(ref.data.Cart)
    //   setDel(ref.data)
    // })
  }, [])

  const HandleDelete = (id) => {
    const cart = data.filter((value) => (value.id !== id))
    dispacth(RemoveCart({uid,datas,cart}))
    // axios.delete(`http://localhost:3000/users/${uid}`)
    //   .then(axios.post('http://localhost:3000/users', { ...datas, Cart: cart }))
    //   .then(alert('remove')).then(window.location.reload())
  }

// const total=  data.reduce((total,value)=>{
//  return total+value.price
// },0)
// console.log(total)

  return (
    <>
      <Navbar />
      {data && data.map((value, index) => {

        return (
          <div className="hero bg-base-200" key={index} >
            <div className="hero-content flex-col lg:flex-row">
              <img src={`${value.img}`} className="max-w-xs rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{value.name}</h1>
                <p className="py-6">{value.discretion}</p>
                <h1>${value.price * value.count}</h1>
                <h1 className="text-3xl font-bold">Qnt : {value.count}</h1>
                <br />
                <div><Link to={'/cart'} className='btn btn-primary' onClick={() => HandleDelete(value.id)}>Remove</Link></div>
              </div>
            </div>
          </div>
        )
      })}
      <div className='subtotal-main bg-base-200'>
        <div className='subtotal-sub'><h1 className="text-3xl font-bold">{data && data.length} items Total:{}</h1></div>
      </div>
      <div className='subtotal-main bg-base-200'>
        {data && data.length >= 1 ?
          <div className='subtotal-sub' ><button className="btn btn-primary">Proceed to buy</button></div> : <div className='h-full'>add to cart</div>
        }
      </div>

      <Footer />
    </>
  )
}

export default Cart
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Sign.css'
import { useDispatch } from 'react-redux'
import { PostUser } from '../../../Redux/ApiSlice/Tunk/Tunk'

function Sign() {
    const Navigate = useNavigate()
    const [firstname, SetFirstName] = useState("")
    const [Cart,setCart]= useState([])
    const [phone,setPhone] =useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [block ,setBlock] =useState(true)
    const dispacth=useDispatch()
    const Handle = (e) => {
        localStorage.setItem('name',firstname)
        e.preventDefault()
        dispacth(PostUser({ firstname,phone, email, password,Cart, block}))
        // axios.post("http://localhost:3000/users", { firstname,phone, email, password,Cart, block})
        //     .then(res => alert('success'))
        Navigate('/login')
            
    }
    return (
        <>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className='text-center text-xl'>Sign Up</h1>
      <form className="card-body " onSubmit={Handle} >
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required onChange={(e)=>SetFirstName(e.target.value)} />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" placeholder="Phone" className="input input-bordered" required onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required   onChange={(e)=>setPassword(e.target.value)}/>
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary mt-6"type='submit'>Sign Up</button>
        <Link to={'/login'} className="btn btn-primary mt-6" >Login</Link>
        <p className='label-text text-center'>Already Login ?</p>
        </div>
      </form>
    </div>
  </div>
</div>
            <Footer />
        </>
    )
}

export default Sign
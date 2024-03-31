import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Cartcontext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { data } from 'autoprefixer'

function Login() {
    const Navibar = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const users =useSelector((state)=>state.ApiSlice.users)
    const Handle = (e) => {
        e.preventDefault()
        // fetch("http://localhost:3000/users")
        //     .then(res => res.json())
        //     .then(res => res
              users.map(value => {
                if (email == value.email && password == value.password&&value.block==true) {
                    localStorage.setItem('id',value.id)
                    Navibar('/')
                }if (value.admin==email&&value.apassword===password) {
                  localStorage.setItem("admin",value.admin)
                  Navibar('/admin')
                } 
            })
    }
    
    return (
        <>
            <Navbar />
            <div className="hero min-h-screen bg-base-200 ">
            
  <div className="hero-content flex-col lg:flex-row-reverse w-full">  
  
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className='text-center text-xl'>Login</h1> 
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={Handle}>Login</button>
          <Link to={'/sign'} className="btn btn-primary mt-6" >Sign</Link>
        </div>
      </form>
    </div>
  </div>
</div>
            <Footer />
        </>

    )
}

export default Login
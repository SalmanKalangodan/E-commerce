import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Cartcontext } from '../../Context/CartContext'

function Login() {
    const Navibar = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Handle = (e) => {
        localStorage.setItem("login", true)
        e.preventDefault()
        fetch("http://localhost:3000/user")
            .then(res => res.json())
            .then(res => res.map(value => {
                if (email == value.email && password == value.password) {
                    Navibar('/')
                }
            }))
    }
    return (
        <>
            <Navbar />
            <div className='login-main-con'>
                <div className='login-main'>
                    <h1>Login</h1>
                    <hr />
                </div>
                <div className='loging-main-form'>
                    <form>
                        <label className="form-control w-full max-w-xs">
                            <div className="label login-input">
                                <span className="label-text">EMAIL</span>
                            </div>
                            <input type="email" placeholder="EMAIL" className="input login-input" required onChange={(e) => setEmail(e.target.value)} /></label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label login-input">
                                <span className="label-text">PASSWORD</span>
                            </div>
                            <input type="password" placeholder="PASSWORD" className="input login-input" required onChange={(e) => setPassword(e.target.value)} /></label>
                    </form>
                </div>
                <div className='flex flex-wrap center btn-main-login'>
                <div>
                    <button className="btn" onClick={Handle} >Login</button>
                </div>
                <div>
                    <button className="btn">Sign</button>
                </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Login
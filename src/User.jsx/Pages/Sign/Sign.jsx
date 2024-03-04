import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Sign.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Cartcontext } from '../../Context/CartContext'


function Sign() {
    const Navigate = useNavigate()
    const [firstname, SetFirstName] = useState("")
    const [lastname,setLastName]= useState("")
    const [phone,setPhone] =useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    


    const Handle = (e) => {
        localStorage.setItem('name',firstname)
        e.preventDefault()
        axios.post("http://localhost:3000/user", { firstname,lastname,phone, email, password })
            .then(res => alert('success'))
        Navigate('/login')
            
    }
    return (
        <>
            <Navbar />
            <div className='sign-main-con'>
                <div className='sign-main'>
                    <div>
                        <h1>Register</h1>
                        <hr />
                    </div>
                    <div className='sign-main-form'>
                        <form>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">FIRST NAME</span>
                                </div>
                                <input type="text" placeholder="FIRST NAME" className="input input-bordered w-full max-w-xs" required onChange={(e)=>SetFirstName(e.target.value)} /></label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">LAST NAME</span>
                                </div>
                                <input type="text" placeholder="LAST NAME" className="input input-bordered w-full max-w-xs" required onChange={(e)=>setLastName((e).target.value)}/></label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">PHONE</span>
                                </div>
                                <input type="number" placeholder="PHONE" className="input input-bordered w-full max-w-xs" required onChange={(e)=>setPhone(e.target.value)}/></label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">EMAIL</span>
                                </div>
                                <input type="email" placeholder="EMAIL" className="input input-bordered w-full max-w-xs" required onChange={(e)=>setEmail(e.target.value)}/></label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">PASSWORD</span>
                                </div>
                                <input type="password" placeholder="PASSWORD" className="input input-bordered w-full max-w-xs" required onChange={(e)=>setPassword(e.target.value)} /></label>
                        </form>

                    </div>
                    <div>
                        <button className="btn btn-wide sign-btn-main" onClick={Handle}>Sign</button>
                        </div>
                        <div>
                       <Link to={'/login'} ><button className="btn btn-wide  sign-btn-main">Login</button></Link>
                        <p className='label-text'>Already Login ?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sign
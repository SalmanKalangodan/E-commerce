import {  useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Navbar.css'

import { useDispatch, useSelector } from 'react-redux'
import { Search, Category , Cart} from '../../../Redux/SearchSlice/SearchSlice'
import { GetProducts, GetUserId, GetUsers } from '../../../Redux/ApiSlice/Tunk/Tunk'
import Example from '../Pro/Example'


function Navbar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const login = localStorage.getItem('id')
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [cart, setcart] = useState(true)
  // const Admin = localStorage.getItem("admin")
  // const [admin, setAdmin] = useState("")
  const dispatch = useDispatch()
  const userId = useSelector((state)=>state.ApiSlice.userId)
  const name =userId.firstname
  const Uid =userId.id
  const cart =userId.Cart

  useEffect(() => {
    dispatch(GetProducts())
    dispatch(GetUsers())
    dispatch(GetUserId(login))
    // axios.get('http://localhost:3000/users').then((ref) => {
    //   ref.data.map((value) => {
    //     if (value.id === login) {
    //       setName(value.firstname)
    //       setEmail(value.id)
    //       setcart(value.Cart)
    //       setAdmin(value.admin)
    //     }


    //   })
    // })
  },[])
  
  const Logout = () => {
    localStorage.clear()
    navigate('/')
  }
  const HandleCategory = (categorys) => {
    dispatch(Category(categorys))
    navigate('/category')
  }
  const HandleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(Search(search))
      navigate('/search')
    }

  }
  const HandleCart =()=>{
    dispatch(Cart(true))
  }
  return (
    <>
    <Example />
    <div className='flex navbar bg-base-100 gap-2'>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a> category </a></li>
            <li><a onClick={() => HandleCategory("men")}>Men</a></li>
            <li><a onClick={() => HandleCategory("women")}>Women</a></li>
            <li><a onClick={() => HandleCategory("kids")}>Kids</a></li>
          </ul>
        </div>
        <Link to={"/"}> <a className="btn btn-ghost text-xl">SHOEPRO</a></Link>
      </div>

      <div className="navbar-end  ">

        <div className="flex gap-2 ">
          <div className="form-control mt-2">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={(e) => setSearch(e.target.value)} onKeyDown={HandleSearch} />
          </div>

          <div className="flex">
            {{
              ...login === Uid ? <div className="dropdown dropdown-end mt-2" >
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                   <div className="indicator" onClick={()=>HandleCart()}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{cart.length}</span>
                  </div>
                </div>

              </div > : <div></div>
            }}

            {{
              ...login === Uid ? <div className='flex gap-2'><div className='dropdown'><div> <button className='btn  btn-active mt-2'>{name}</button></div>
                <ul className='menu menu-sm dropdown-content mt-3 z-[1]   shadow bg-base-100 rounded-box'>
                  <div> <button onClick={Logout} className='btn btn-primary mt-2'>Logout</button></div>
                </ul>
              </div>
              </div>
                : <div className='flex mt-2 gap-1'>
                  <Link to={'/login'}><button className="btn btn-active btn-primary  ">Login</button></Link>
                  <Link to={'/sign'}> <button className="btn btn-active btn-primary ">Sign Up</button></Link>
                </div>
            }}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetProducts, GetUsers } from '../../../Redux/ApiSlice/Tunk/Tunk'

function Navbar() {
  const dispacth = useDispatch()
  useEffect(()=>{
    dispacth(GetProducts())
    dispacth(GetUsers())
  })
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">SHOEPRO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/admin/userslist"}>Users</Link></li>
            <li><Link to={"/admin"}>Product</Link></li>
            <li><Link to={"/admin/post"}>Add Products</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to={'/'} className='btn btn-primary'>Go the web</Link>
          <Link onClick={() => localStorage.clear()} to={'/login'} className='btn btn-primary '>Log out</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Post from './Components/Post/Post'
import UsersList from './Components/UsersList/UsersList'
import Edit from './Components/Edit/Edit'

function Admin() {
  const admin =localStorage.getItem("admin")
  return (
    <div>
      {admin?  <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/post' element ={<Post />} />
        <Route path='/userslist' element={<UsersList />} />
        <Route path='/edit' element ={<Edit />} />
        </Routes>:null}
      
    </div>
  )
}

export default Admin
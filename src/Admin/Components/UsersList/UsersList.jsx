import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

function UsersList() {
    const [users,setUsers] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users').then((ref)=>{
            setUsers(ref.data)
        })
    },[])
    const HandleDelete=(value)=>{
      value.block==true?value.block=false:value.block==false?value.block=true:value.block
         axios.put(`http://localhost:3000/users/${value.id}`,{...value,...value.block}).then(window.location.reload())
    }
  return (
    <div>
        <Navbar />
    {users&&users.map((value)=>{
        return(
            <div className="overflow-x-fixed">
            <table className="table table-xl table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Email</th> 
                  <th>Phone</th> 
                </tr>
              </thead> 
              <tbody>
                <tr>
                    <div className='flex'>
                   {value.block==true?<td><button className='btn btn-primary' onClick={()=>HandleDelete(value)}>Block</button></td>:<td><button className='btn btn-primary'onClick={()=>HandleDelete(value)} >UnBlock</button></td>}
                    
                    
                    </div>
                
                  <td>{value.firstname}</td> 
                  <td>{value.email}</td> 
                  <td>{value.phone}</td> 
                </tr>
                </tbody>
                </table>
                </div>
        )
    })}
   
      </div>
  )
}

export default UsersList
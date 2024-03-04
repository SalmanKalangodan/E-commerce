import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Catagory() {
    const [category,setCategory] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/products").then((ref)=> setCategory(ref.data))
    })
  return (
    <>
   {category.map((value)=>{
return(
    <div>
    <h1>{value.name}</h1>
    </div>
)
   })}
   </>
  )
}

export default Catagory
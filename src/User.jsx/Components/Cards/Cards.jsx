import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Cards.css'
import { useSelector } from 'react-redux'

function Cards() {
  // const [data, setData] = useState([])
  const data =useSelector((state)=>state.ApiSlice.data)
  // useEffect(() => {
  //   axios.get("http://localhost:3000/products")
  //     .then((ref) => setData(ref.data))
  // }, [])
  return (
    <>
      <div className='w-full h-20'><h1 className='text-center text-5xl mt-6'> Products </h1></div>
      <div className='flex flex-wrap gap-10 justify-evenly'>
        {data.map((value, index) => {
          return (
            <div key={index} className=''>
              <div className=''>
                <div className="card w-96 bg-base-50 shadow-xl card-main ">
                  <figure><img src={value.img} alt="Shoes" className='max-w-sm max-h-96' /></figure>
                  <div className="card-body">
                    <h2 className="">{value.name}</h2>
                    <div><h2>MRP:${value.price}</h2></div>
                    <div className="card-actions justify-center">
                      <Link to={`/product/${value.id}`} className="btn btn-primary">More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cards
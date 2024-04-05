import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../../../Redux/ApiSlice/Tunk/Tunk'
import { Link } from 'react-router-dom'

function NewInRunning() {
    const dispacth =useDispatch()
useEffect(()=>{
    dispacth(GetProducts)
},[])

    const data = useSelector((state)=>state.ApiSlice.data.slice(0,4))
  return (
    <>
    
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
<h2 className="text-3xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data.map((product) => {
        return (
          // <div key={index} className=''>
          //   <div className=''>
          //     <div className="card w-96 bg-base-50 shadow-xl card-main ">
          //       <figure><img src={value.img} alt="Shoes" className='max-w-sm' /></figure>
          //       <div className="card-body">
          //         <h2 className="">{value.name}</h2>
          //         <div><h2>MRP:${value.price}</h2></div>
          //         <div className="card-actions justify-center">
          //           <Link to={`/product/${value.id}`} className="btn btn-primary">More</Link>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          // <div key={product.id} className="group relative">
          //    <Link to={`/product/${product.id}`}>
          //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          //     <img
          //       src={product.img}
          //       alt={product.imageAlt}
          //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          //     />
          //   </div>
          //   <div className="mt-4 flex justify-between">
          //     <div>
          //       <h3 className="text-sm text-gray-700">
          //         <a href={product.href}>
          //           <span aria-hidden="true" className="absolute inset-0" />
          //           {product.name}
          //         </a>
          //       </h3>
          //       <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          //     </div>
          //     <p className="text-sm font-medium text-gray-900">{product.price}</p>
          //   </div></Link>
          // </div>
          <a key={product.id} href={product.href} className="group">
            <Link to={`/product/${product.id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.img}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">MRP : ₹ {product.price}</p>
          </Link>
        </a>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default NewInRunning
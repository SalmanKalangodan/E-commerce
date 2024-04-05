import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../../Redux/SearchSlice/SearchSlice'

function CategoryPr() {
    const dispacth =useDispatch()
    const navigate = useNavigate()
    const callouts = [
        {
          name: '',
          description: 'Men Shoe',
          imageSrc: 'https://i.pinimg.com/originals/a6/20/f2/a620f233de0bc834ca9802cf2940122b.png',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
          category:"men"
        },
        {
          name: '',
          description: "Women's Shoe",
          imageSrc: 'https://www.earthingoz.com.au/assets/alt_2/ETH2906_2910.jpg?20220726125318',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
          category:"women"
        },
        {
          name: '',
          description: "Kid's Shoe",
          imageSrc: 'https://th.bing.com/th/id/OIP.jsAoOQuSE1jUsdzoSHq_8wHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
          category:"kids"
        },
      ]

    const HandleClick =(id)=>{
        dispacth(Category(id))
    navigate('/category')
    }
  return (
    <div>
          <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout ) => (
              <div key={callout.name} className="group relative" onClick={()=>HandleClick(callout.category)}>
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CategoryPr
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'
import './Home.css'

function Home() {
  return (
    <div className='main'>
      <Navbar />
     <Header />
     <Cards />
     <Footer />
      </div>
    
  )
}

export default Home
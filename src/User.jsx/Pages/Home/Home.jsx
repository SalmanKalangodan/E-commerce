import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import Parts from '../../Components/Parts/Parts'
import NewInRunning from '../../Components/NewInRunnig/NewInRunning'
import Baner from '../../Components/Baner/Baner'
import Example from '../../Components/Pro/Example'
import CategoryPr from '../../Components/CategoryPr/CategoryPr.jsx'
import Alert from '../../Components/Alert/Alert.jsx'


function Home() {
  return (
    <div className='main'>
      <Navbar />
     <Parts />
     <CategoryPr />
     <NewInRunning />
     <Header />
     <Cards />
     <Footer />
     {/* <Alert /> */}
     
      </div>
    
  )
}

export default Home
import React from 'react'
import Header from '../../Header/Header'
import Banner from './Banner'
import './Home.css'
import CategoryList from './CategoryList'
import Delivary from './delivary/Delivary'
import Footer from '../../Footer/Footer'



export default function Home() {
  return (
    <div className='font-Ubuntu'>
     
     <div  className='mb-[100rem]'>

      <Header/>
      <Banner/>
      <CategoryList/>
   
     </div>
      <Delivary/>

      <Footer/>
      
    </div>
  )
}

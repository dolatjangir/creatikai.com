import FooterSection from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import HomePage from '../components/home'

function page() {
  return (
    <div className=''>
      <Navbar/>
    <HomePage/>
     <FooterSection/>
    </div>
  )
}

export default page

import FooterSection from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import HomePage from '../components/home'
import MortgageLandingPage from '../components/home2'
import AgencySection from '@/components/solution-agencys'

function page() {
  return (
    <div className=''>
      <Navbar/>
    {/* <HomePage/> */}
    <MortgageLandingPage/>
    
     <FooterSection/>
    </div>
  )
}

export default page

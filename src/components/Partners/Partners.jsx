import React from 'react'
import './Partners.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Partners() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <>
    <div className='bgtpartner py-[50px] text-white overflow-hidden'>
    <div className='overflow-hidden  mx-auto   text-white' data-aos="fade-up" data-aos-delay="200">
        <h3 className='partner-heading-1 text-center'>Partners</h3>
        <h2 className='partner-heading-2 text-center'>Our Awesome Partners</h2>
    <div className='grid md:grid-cols-6 grid-cols-2 icons md:w-[1100px] mx-auto pt-[50px]' data-aos="fade-up" data-aos-delay="200">
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
        <div><img src='images/designer.webp' alt=''/></div>
    </div>
    </div>
    </div>    
    </>
  )
}

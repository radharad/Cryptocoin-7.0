import React from 'react'
import './Profit.css'
import {AiOutlineCheck} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Profit() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <div className='bgt py-[50px] text-white overflow-hidden'>
    <div className='overflow-hidden  mx-auto   text-white'>
        <h3 className='heading-1 text-center'>Your Profit</h3>
        <h2 className='header-main text-center'>Your Profit With Cryptu</h2>
    <div className='grid md:grid-cols-2 grid-cols-1  md:p-[30px] md:w-[1140px] mx-auto '> 
    <div className='bgProfit' data-aos="fade-right"></div>
      <div className=' md:pr-[100px]' data-aos="fade-up">
      
      <div className="flex flex-col lg:items-start items-center md:pt-[50px]">
        <div className="svg svgs w-12 h-12 inline-flex items-center justify-center rounded-full  text-[#430000] md:mb-5">
          <AiOutlineCheck className="w-[25px] h-[25px]"/>
        </div>
        <div className=" flex-grow flex-grows">
          <p className="leading-relaxed descriptions text-base text-red-200">Fusce id ipsum eu augue ultricies tincidunt. Donec non pharetra sapien. Nunc nec vehicula est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        </div>
      </div>
      <div className="flex flex-col lg:items-start items-center">
        <div className="svg svgs w-12 h-12 inline-flex items-center justify-center rounded-full  text-[#430000] md:mb-5">
        <AiOutlineCheck className="w-[25px] h-[25px]"/>
        </div>
        <div className=" flex-grow flex-grows">
          <p className="leading-relaxed descriptions text-base text-red-200">Fusce id ipsum eu augue ultricies tincidunt. Donec non pharetra sapien. Nunc nec vehicula est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            
        </div>
      </div>
      <div className="flex flex-col  lg:items-start items-center">
        <div className="svg svgs w-12 h-12 inline-flex items-center justify-center rounded-full  text-[#430000] md:mb-5">
         <AiOutlineCheck className="w-[25px] h-[25px]"/>
        </div>
        <div className=" flex-grow flex-grows">
          <p className="leading-relaxed descriptions text-base text-red-200">Fusce id ipsum eu augue ultricies tincidunt. Donec non pharetra sapien. Nunc nec vehicula est. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
           
        </div>
      </div>
     </div>
    </div>    
    </div>    
    </div>
  )
}

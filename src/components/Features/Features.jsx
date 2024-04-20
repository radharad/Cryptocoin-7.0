import React from 'react'
import './Features.css'
import {GiHomeGarage} from 'react-icons/gi'
import {VscFolder} from 'react-icons/vsc'
import {MdAttachMoney} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Features() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <>
    <div className='overflow-hidden'>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full  lg:mb-0 rounded-lg overflow-hidden" data-aos="fade-right">
      <img alt="feature" className="object-cover object-center h-full w-full" src="images/features.png"/>
    </div>
 <div className="flex flex-col flex-wrap lg:py-6 - lg:w-1/2 lg:pl-12 lg:text-left text-center" data-aos="fade-up">

    <h3 className='h3'>Our Best Features</h3>
    <h2 className='head'>Cryptu provide best features for you</h2>
    <p className='para'>Integer faucibus dignissim quam. Fusce sollicitudin dictum sem. Phasellus commodo eros quis eros fermentum.</p>

<div className="flex flex-col lg:items-start items-center">
        <div className="svg w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-white mb-5">
         <MdAttachMoney className="w-[45px] h-[45px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="heading text-lg title-font font-medium mb-1">Registered Company</h2>
          <p className="leading-relaxed description text-base">In ante est, placerat ut odio et, rhoncus sodales nunc.<br/> Ut ligula lacus, ultrices ut accumsan sed, iaculis nec<br/> lectus gravida id elit ac. </p>   
        </div>
      </div>

      <div className="flex flex-col lg:items-start items-center">
        <div className="svg w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-white mb-5">
         <GiHomeGarage className="w-[45px] h-[45px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="heading text-lg title-font font-medium mb-1">Registered Company</h2>
          <p className="leading-relaxed description text-base">In ante est, placerat ut odio et, rhoncus sodales nunc.<br/> Ut ligula lacus, ultrices ut accumsan sed, iaculis nec<br/> lectus gravida id elit ac. </p>
            
        </div>
      </div>
      <div className="flex flex-col  lg:items-start items-center">
        <div className="svg w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-white mb-5">
          <VscFolder className="w-[45px] h-[45px]"/>
        </div>
        <div className="flex-grow">
          <h2 className="heading text-lg title-font font-medium mb-1">Crypto Currency Investment</h2>
          <p className="leading-relaxed description text-base">In ante est, placerat ut odio et, rhoncus sodales nunc.<br/> Ut ligula lacus, ultrices ut accumsan sed, iaculis nec<br/> lectus gravida id elit ac. </p>
           
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

import React from 'react'
import './Choose.css'
import {SiGoogleanalytics} from 'react-icons/si'
import {MdHeadsetMic} from 'react-icons/md'
import {CiGlobe} from 'react-icons/ci'
import {BsShieldCheck} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function ChooseCryptu() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <>
     <div className='bg text-white overflow-hidden'>
    <div className='grid md:grid-cols-[60%_auto] grid-cols-1'>

      <div  data-aos="fade-up">
     <h3>Why Choose Cryptu</h3>
     <h2>Best trusted cryto currency online platform in the world</h2>
     <p>Suspendisse finibus mattis nunc non aliquet. Curabitur eleifend quam quis sapien lacinia, non maximus elit molestie. Sed sed diam at enim lacinia varius in in libero. Donec nec felis porta, posuere dui tincidunt, porttitor felis. Fusce pharetra laoreet eros, quis dictum nisi elementum vel.</p>
     <div className='grid md:grid-cols-2 grid-cols-1 gridIcon'>

      <div className='column' >
        <div className='icon'><SiGoogleanalytics/></div>
        <div className='content'>
        <p>Data Protection</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='md:pt-0 pt-10 column'>
       <div className='icon'><MdHeadsetMic/></div>
       <div className='content'>
       <p>24/7 Support</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='pt-10 column'>
        <div className='icon'><CiGlobe/></div>
        <div className='content'>
        <p>Live Exchange Rate</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>

      <div className='pt-10 column'>
        <div className='icon'><BsShieldCheck/></div>
        <div className='content'>
        <p>Security Protection</p>
        <h6>Donec porta efficitur sapien eu cursus<br/> porttitor nisl maximus.</h6>
        </div>
      </div>
      </div>
      </div>
    
     <div  data-aos="fade-left">
      <img className="object-cover object-center rounded py-[40px] md:pr-[0px] pr-[50px]" alt="hero" src="images/security.webp" />
     </div>
     </div>
     </div>
   
    </>
  )
}

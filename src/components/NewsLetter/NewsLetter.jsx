import React from 'react'
import './NewsLetter.css'
import {GrSend} from 'react-icons/gr'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function NewsLetter() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <>
    <div className='md:w-[970px] mx-auto rounded-[20px] p-[50px] z-[1] bg-red-400 relative bottom-[100px]' style={{bottom:"100px"}} data-aos="fade-up" data-aos-delay="200">
      <div className='letter'>
        <h2>Subscribe to Our Newsletter</h2>
         <div className="form-group newsletter-field">
            <form action="#" method="post">
             <input className="form-control" type="email" name="EMAIL" placeholder="Your email"/>
                <button type="submit" className="sendbtn" >
                 <GrSend className='text-[30px] ml-[10px]'/>
                </button>
            </form>
        </div>
        </div>
        </div>
    </>
  )
}

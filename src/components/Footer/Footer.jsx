import React from 'react'
import './Footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import NewsLetter from '../NewsLetter/NewsLetter'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Footer() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <>
      <div className='bgLast'>
        <NewsLetter/>
       <div className='grid md:grid-cols-[30%_auto_auto_auto] grid-cols-1 md:w-[1200px] mx-auto text-white '>
        <div className='one' data-aos="fade-up" data-aos-delay="200">
          <h1 className=' py-[20px] '>cryptocoin</h1>
          <p>Fusce venenatis massa nec nibh euismod, nec lobortis enim aliquam. Aenean are pellentesque efficitur nisi a blandit.</p>
          <div className='footer-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
            <div><BsWhatsapp/></div>
          </div>
        </div>

        <div className='two md:ml-[50px]' data-aos="fade-up" data-aos-delay="400">
         <h1>Company</h1>
         <ul>
          <li>About us</li>
          <li>Team Members</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
         </ul>
        </div>

        <div className='two' data-aos="fade-up" data-aos-delay="600">
         <h1>Useful Links</h1>
         <ul>
          <li>Faq</li>
          <li>Token Sale</li>
          <li>Contact Us</li>
          <li>Crypto Currenty</li>
          <li>Help Center</li>
         </ul>
        </div>

        <div className='four' data-aos="fade-up" data-aos-delay="800">
          <h1>Contact us</h1>
          <div className='grid grid-cols-1 gap-5 py-[50px]'>
        <div>
            <h5><BsTelephone/></h5>
            <h6> (+1) 123 456 7890 </h6>
        </div>
        <div>
            <h5><BiEnvelope/></h5>
            <h6>company@info.com</h6>
        </div>
        <div>
            <h5><MdOutlineLocationOn/></h5>
            <h6>Area, City , State, Pincode</h6>
        </div>
       </div> 
       </div>
       </div>
        <div className="dotted grid md:grid-cols-2 grid-cols-1  text-white p-[20px] md:w-[1200px] mx-auto ">
       <div>© Copyright 2022 <a className='text-red-200'>Company Name</a> All Rights Reserved.</div>
       <div className='last '>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
       </div>
        </div>
      </div>   
    </>
  )
}

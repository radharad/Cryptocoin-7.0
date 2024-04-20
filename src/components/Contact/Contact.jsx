import React from 'react'
import './Contact.css'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Rings } from 'react-loader-spinner'
import { useState } from 'react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000) 
  },[])
  return (
    <div className='overflow-hidden z-[-1]'>
       {
      loading ? 
       <div className='loader text-center'>
      <Rings height={150} width={150} color="white" radius="300px" ariaLabel='Loading' />
       </div>
      :
      <div>
    <Nav/>
    <div className='fixed cursor-pointer md:bottom-[40px] md:left-[20px] md:right-0 right-[10px] bottom-[90px] z-[10]'>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40}/></a>
   </div>
    <div className='poster'>
    <div data-aos="fade-up" data-aos-delay="200">
    <h1>Contact Us</h1>
    <p className='md:w-[580px] mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  </div>
  </div>
     <div className='bgContact  md:p-[50px] p-[20px] md:my-[20px] md:px-[100px]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        
      <div className='firstOne' data-aos="fade-up" data-aos-delay="400">
       <h3>Contact us</h3>
       <h2>Get In Touch</h2>
       <p className='md:w-[400px]'>Curabitur dictum id neque sit amet adivquam. Integer vitae nibh quis sapien consequat condimentum.</p>
       <div className='grid grid-cols-1 gap-5 md:py-[50px]'>
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

      <div className='secondOne' data-aos="fade-up" data-aos-delay="600">
      <section className="text-gray-600 body-font relative">
  <div className="container  mx-auto">
    
    <div className="mx-auto">
      <div className="form flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <input type="text" id="name" name="name" placeholder='Your name' className='contactinput' required/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <input type="email" placeholder='Your email' id="email" name="email" className='contactinput' required/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <input type="text" placeholder='Subject' id="subject" name="subject" className='contactinput' required/>
          </div>
        </div> 
        <div className="p-2 w-full">
          <div className="relative">
            <textarea id="message" name="message" placeholder='Your message here' className="contacttextarea" required></textarea>
          </div>
        </div>
        <div className="p-2 w-full ">
        <button className='rounded-[23px] bg-red-400 font-bold w-[100%] max-w-[192px] z-30  h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
        </div>
    </div> 
    </div>
    </div>
   </section>
   </div>
   </div>
   </div>
    <div className='mapContainer md:pt-[40px] pt-[30px] ' >
     <div className='md:w-[1100px] mx-auto md:pb-5'>
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2sbd" width="100%" height="450" style={{border:" 0"}} allowfullscreen="" loading="lazy"></iframe>
     </div>
     </div>
   </div>
   <Footer/>
    </div>
}
</div>
  )
}

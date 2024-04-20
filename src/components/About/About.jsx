import React,{useState} from 'react'
import './About.css'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Rings } from 'react-loader-spinner'

export default function About() {
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
      <h1>About Us</h1>
      <p className='md:w-[580px] mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
    <div className='max-w-[1140px] mx-auto overflow-hidden'>
    <section className="text-[#5a0808] bg-[white] body-font relative h-[100vh]">
  <div className="container mx-auto grid md:grid-cols-[40%_60%] grid-cols-1 items-center " data-aos="fade-right" data-aos-delay="500">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mt-0 mt-[20px]">
      <img className="object-cover object-center rounded" alt="hero" src="images/bit.png"/>
 </div>
  <div className='about md:p-[50px] p-[20px]' data-aos="fade-up" data-aos-delay="500">
    <h3>About Us</h3>
    <h2>We complete every<br/> project with extra care<br/> for you</h2>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu accumsan libero. Nullam vulputate arcu tellus, ut placerat libero convallis hendrerit.</p>
    <p>Praesent dui leo, rhoncus non interdum sit amet, lobortis eu elit. Vivamus eu libero vitae purus eleifend rhoncus. Nullam vel tempus nulla. Donec bibendum bibendum ipsum id maximus.</p>
    <button className='rounded-[23px] bg-red-400 text-white font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
 </div>
  </div>
 </section>
    </div>
    <Partners/>
    
{/* Contact */}

<div className='bgContact  overflow:hidden md:p-[50px] p-[20px] md:my-[20px] md:px-[100px]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        
      <div className='firstOne' data-aos="fade-up">
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

      <div className='secondOne' data-aos="fade-up" data-aos-delay="500">
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
        <button className='rounded-[23px] bg-red-400 font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
        </div>
  </div>

      </div>
      </div>
   </section>
      </div>
      </div>
      </div>
     
    <Footer/>
    </div>
    
       }
        </div>
  )
}

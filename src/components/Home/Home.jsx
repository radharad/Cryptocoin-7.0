import React, { useState, useEffect } from 'react'
import {BsTelephone} from 'react-icons/bs'
import {BiEnvelope} from 'react-icons/bi'
import {MdOutlineLocationOn} from 'react-icons/md'
import { Rings } from 'react-loader-spinner'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import ChooseCryptu from '../ChooseCryptu/ChooseCryptu'
import Features from '../Features/Features'
import Future from '../Future/Future'
import Token from '../Token/Token'
import Profit from '../Profit/Profit'
import Timeline from '../Timeline/Timeline'
import Team from '../Team/Team'
import Faq from '../Faq/Faq'
import Partners from '../Partners/Partners'
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
const [loading, setLoading] = useState(false)

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      disable: window.innerWidth < 800
    })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000) 
  },[])

  return (
    <div className='overflow-hidden z-[-1]'> 
    {
      loading ? 
       <div className='loader text-center'>
      <Rings height={150} width={150} radius="300px" color="white" ariaLabel='Loading' />
       </div>
      :
    <div>
    <div className='bghome'>   
  <Navbar/>
 
  
 <section class="text-white  body-font relative min-h-[100vh] overflow-hidden">
 
  <div class="container mx-auto flex   py-[20px]  md:flex-row flex-col items-center ">
  <div className='md:px-[100px] py-[80px]  px-[20px] pt-[20px]' data-aos="fade-up">
     <h3 className='text-[23px] pb-[10px] font-[500]'>Enjoy The World With Cryptu</h3>
     <h1 className='md:text-[47px] md:leading-[60px] text-[30px] font-[500] pb-[24px] '>Crpto currency is a<br/> digital asset to work</h1>
     <h5 className='text-[20px] leading-[30px] pb-[40px] font-[400]'>Fusce urna lacus, aliquam eu tortor vitae, aliquam<br/> tincidunt purus. Praesent tincidunt viverra molestie sed nec.</h5>
     <button className='rounded-[23px] bg-red-400 font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
    </div>
    <div class="diagram lg:max-w-lg lg:w-full md:w-1/2 w-5/6 " data-aos="fade-left" >
      <img class="object-cover object-center rounded" alt="hero" src="images/banner.png"/>
    </div>
  </div>

  <div className='wave'></div>
 </section>
 </div>

 
<div className='max-w-[1140px] mx-auto overflow-hidden'>

    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 overflow-hidden md:py-[100px]'>
    <div className='fixed cursor-pointer  md:bottom-[40px] md:left-[20px] md:right-0 right-[10px] bottom-[90px] z-[10] '>
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' className='' width={40} alt=''/></a>
   </div>
    <div className='card' data-aos="zoom-in">
        <img src='images/social-Assistant.png' className='md:ml-[40px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Social Assistant</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in">
        <img src='images/order-management.png' className='md:ml-[50px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Order Management</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in">
        <img src='images/price-notification.jpeg' className='md:ml-[60px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Price Notification</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in">
       <img src='images/trading-platform.jpeg' className='md:ml-[50px] ml-[100px]' alt=''/>
       <h3 className='my-[30px]'>Trading Platform</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    </div>
    </div>
{/**/}

    <div className='max-w-[1140px] mx-auto overflow-hidden'>
    <section class="text-[#5a0808] bg-[white] body-font relative min-h-[100vh]">
  <div class="container mx-auto grid md:grid-cols-[40%_60%] grid-cols-1 items-center ">
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="fade-right">
      <img class="object-cover object-center rounded" alt="hero" src="images/bit.png"/>
 </div>
  <div className='about md:p-[50px] p-[20px]' data-aos="fade-up">
    <h3>About Us</h3>
    <h2>We complete every<br/> project with extra care<br/> for you</h2>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu accumsan libero. Nullam vulputate arcu tellus, ut placerat libero convallis hendrerit.</p>
    <p>Praesent dui leo, rhoncus non interdum sit amet, lobortis eu elit. Vivamus eu libero vitae purus eleifend rhoncus. Nullam vel tempus nulla. Donec bibendum bibendum ipsum id maximus.</p>
    <button className='rounded-[23px] bg-red-400 text-white font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Learn More </button>
 </div>
  </div>
 </section>
    </div>

<ChooseCryptu/>
<Features/>
<Future/>
<Token/>
<Profit/>
<Timeline/>
<Team/>
<Faq/>
<Partners/>

{/* Contact */}

<div className='bgContact  overflow:hidden md:p-[50px] p-[20px] md:my-[20px] md:px-[100px]'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        
      <div className='firstOne' data-aos="fade-up" data-aos-delay="200">
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

      <div className='secondOne' data-aos="fade-left" data-aos-delay="400">
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

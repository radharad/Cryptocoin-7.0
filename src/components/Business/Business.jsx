import React,{useState} from 'react'
import './Business.css'
import Footer from '../Footer/Footer'
import Timeline from '../Timeline/Timeline'
import Nav from '../Navbar/Nav'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Rings } from 'react-loader-spinner'

export default function Business() {
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
      <a href="https://wa.me/917875006677" target='_blank'><img src='images/whatsapp.png' width={40} alt=''/></a>
   </div>
    <div className='poster'>
    <div data-aos="fade-up" data-aos-delay="200">
    <h1>Business</h1>
    <p className='md:w-[580px] mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
 </div>
  </div>
  <Timeline/>
    <div className='max-w-[1140px] mx-auto overflow-hidden'>
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 overflow-hidden md:py-[100px]'>
     
    <div className='card' data-aos="zoom-in" data-aos-delay="200">
        <img src='images/social-Assistant.png' className='md:ml-[40px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Social Assistant</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in" data-aos-delay="300">
        <img src='images/order-management.png' className='md:ml-[50px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Order Management</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in" data-aos-delay="400">
        <img src='images/price-notification.jpeg' className='md:ml-[60px] ml-[100px]' alt=''/>
        <h3 className='my-[30px]'>Price Notification</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    <div className='card' data-aos="zoom-in" data-aos-delay="500">
       <img src='images/trading-platform.jpeg' className='md:ml-[50px] ml-[100px]' alt=''/>
       <h3 className='my-[30px]'>Trading Platform</h3>
        <p>Morbi pellentesque congue felis molestie tristique. Aenean rhoncus leo a posuere ullamcorper.</p>
        <a href='/'>Read More</a>
    </div>

    </div>
    </div>
    <Footer/>
    </div>
}
</div>
  )
}

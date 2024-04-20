import React  from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import './Login.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Rings } from 'react-loader-spinner'
import { useState } from 'react'

export default function Login() {

const [loading, setLoading] = useState(false)
 useEffect(()=>{
  Aos.init({
    duration: 1000,
    disable: window.innerWidth < 800
  })
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  },1000) 
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
<section className="text-gray-600 body-font relative md:w-600px mx-auto bgLogin" data-aos="fade-up" data-aos-delay="200">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <input type="text" placeholder='Enter Your First Name' id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <input type="email" placeholder='Enter Your Last Name' id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <input type="email" placeholder='Enter Your Number' id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <textarea id="message" placeholder='Enter Your Address'  name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
        <button className='rounded-[23px] bg-red-400 md:ml-[200px] ml-[50px] text-white font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center'> Login </button>
        </div>
        
    </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
}
</div>
  )
}

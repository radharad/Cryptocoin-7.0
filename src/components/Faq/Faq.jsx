import React, { useState } from 'react'
import  question  from './Api'
import './Faq.css'
import Accordian from './Accordian'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Faq = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  },[])
  const [data, setData] = useState(question)
  return (
    <>
  <div className='overflow-hidden  text-white'>
   <div className='md:py-[50px] py-[20px] '>
    <h3 className='faqheading-1 text-center'>Support Center</h3>
    <h2 className='faqheading-2 text-center'>Frequently Asked Questions</h2>
   </div>
  <div className='grid md:grid-cols-[60%_auto] grid-cols-1 md:w-[1200px] mx-auto '>

  <div  data-aos="fade-up" data-aos-delay="300" >
 <section className='main-div md:w-45vw'>
    {
      data.map((curElem) => {
        const { id } = curElem;
        return <Accordian key={ id } {...curElem}/>
      })
    }
    </section>
  </div>

  <div  data-aos="fade-up" data-aos-delay="500">
  <img className="object-cover object-center rounded" alt="hero" src="images/faq.png"/>
  </div>

  </div>
  </div>  
    </>
  )
}
export default Faq

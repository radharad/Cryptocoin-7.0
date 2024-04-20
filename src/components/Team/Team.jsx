import React from 'react'
import './Team.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Team() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 800
    })
  },[])
  return (
    <div className='bg-[#430000] md:pt-[80px] md:pb-[50px] overflow-hidden text-white md:px-[80px] bgteam'>
         <div className='md:py-[30px] py-[10px] text-center'>
        <h3 className='teamheading-1 '>Team Members</h3>
        <h2 className='teamheading-2 '>Our Expert Team</h2>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 md:ml-[50px] ml-[80px]'>
        <div className='team text-center relative' data-aos="fade-up" data-aos-delay="300">
          <div className='member1 w-[197px] h-[197px] relative rounded-[50%] border-[13px]  border-white overflow-hidden'>
            <img src='images/member1.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
        
          <div className='team-name '>
          <h3>Mariana Robles</h3>
          <h5>Project Manager</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        <div className='team text-center z-20' data-aos="fade-up" data-aos-delay="500">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member2.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Isaac Mitchell</h3>
          <h5>CEO & Founder</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>
 
        <div className='team text-center'  data-aos="fade-up" data-aos-delay="700">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member3.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Richard Johnson</h3>
          <h5>Operating Manager</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        <div className='team text-center'  data-aos="fade-up" data-aos-delay="900">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member4.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Jesica Kelly</h3>
          <h5>Senior Developer</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        <div className='team text-center'  data-aos="fade-up" data-aos-delay="300">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member5.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Arthur Ludlow</h3>
          <h5>Project Advisor</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        <div className='team text-center'  data-aos="fade-up" data-aos-delay="500">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member6.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Michael Welkar</h3>
          <h5>Developer</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>
 
        <div className='team text-center'  data-aos="fade-up" data-aos-delay="700">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member7.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Kayla Stevenson</h3>
          <h5>Designer</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        <div className='team text-center'  data-aos="fade-up" data-aos-delay="900">
          <div className='member1 relative w-[197px] h-[197px] rounded-[50%] border-[13px]  border-white overflow-hidden '>
            <img src='images/member8.jpg' className='hover:scale-125 duration-1000 rounded-[50%]' alt=''/>
          </div>
          <div className='team-name '>
          <h3>Josephine Kenyo</h3>
          <h5>Senior Advisor</h5>
          <div className='team-social'>
            <div><ImFacebook/></div>
            <div><BsTwitter/></div>
            <div><BsInstagram/></div>
            <div><FaLinkedinIn/></div>
          </div>
          </div>
        </div>

        </div>
    </div>
  )
}

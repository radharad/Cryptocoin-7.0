import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
import './Navbar.css'

export default function Nav() {
  const [toggle,setToggle] = useState(false)
  const handleToggle = () => {
   setToggle(!toggle)
  }

  return ( 
     <div className='color bg-[rgb(119,0,0)] text-white mx-auto overflow-hidden'>
      <div>
         <div className=' text-white flex justify-around md:px-[70px] px-[30px] pb-[100px]  pt-[30px]  items-center'>
        <div className='w-full text-3xl font-bold decoration-none'>
        <NavLink to={"/"}>
        <p className='logo'>cryptocoin</p>
          </NavLink>
        </div>
        <ul className='hidden md:flex gap-10 text-white pt-3  items-center  font-bold '>
        <li>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li className='relative'>
        <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <button className='w-[150px] border-2 border-white p-2 rounded-[23px] '><NavLink to={"/"}> Get Started </NavLink></button>
        </ul>
       
        <div onClick={handleToggle} className='block z-10 md:hidden button py-[10px] px-[20px]'>
        {
          toggle ?
          <AiOutlineClose size={30} className=''/>
          :
          <AiOutlineMenu size={30}/>
        }
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'z-[1] fixed left-0 top-0 w-[100%] pt-[50px] h-[450px] text-center border-r-gray-900 bg-[#930000] text-white ease-in-out duration-100  z-2' : 'bg-[#430000] fixed ease-in-out duration-100 left-[-100%] z-2'}>
        <li className='p-2'>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/business"}>Business</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <button className='w-[200px] border border-white p-2 rounded-[23px] '> <NavLink to={"/"}> Get Started </NavLink></button>
        </ul>
      </div> 
      </div>
     </div>
   
  )
}

import React, { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'

const Accordian = ({ question, answer }) => {
    const [show, setShow] = useState(false)
  return (
    <>
     <div className='faq overflow-hidden'>
       <div className='main-heading md:mt-[30px] mt-0'>
         <h3>{question}</h3>
         <p onClick={() => setShow(!show)}>{show? <BsChevronUp/>:<BsChevronDown/>}</p>
       </div>
       {show && <p className='answers'>{ answer }</p>}
    </div>
    </>
  )
}

export default Accordian

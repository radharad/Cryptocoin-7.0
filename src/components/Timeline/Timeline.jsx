import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Timeline.css'
import {BiCircle} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'

export default function Tmeline() {
  return (
    <div className='md:w-996px mx-auto md:pt-[50px] pt-[10px] md:mb-10 overflow-hidden'>
        <div className='overflow-hidden  text-white'>
        <div className='md:py-[30px] py-[10px]'>
        <h3 className='proheading-1 text-center'>Bit Money Platform</h3>
        <h2 className='proheading-2 text-center'>Cryptu Road Map</h2>
        </div>
    <div className='experience text-white '>
      <VerticalTimeline lineColor='#f5a6a4'>

       <VerticalTimelineElement className='vertical-timeline-element--education box'
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BsCheckLg/>}
       >
        <div className='timeline-content md:w-[359px] md:h-[220px]'>
         <h3>January 10, 2021</h3>   
         <h2>Idea Generation</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

       <VerticalTimelineElement className='vertical-timeline-element--education'
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BsCheckLg/>}
       >
        <div className='timeline-content-second md:w-[359px] md:h-[220px]'>
         <h3>February 15, 2021</h3>   
         <h2>Market Research</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

       <VerticalTimelineElement className='vertical-timeline-element--education box'
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BsCheckLg/>}

       >
        <div className='timeline-content md:w-[359px] md:h-[220px]'>
         <h3>March 25, 2021</h3>   
         <h2>Business Plan</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

       <VerticalTimelineElement className='vertical-timeline-element--education '
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BiCircle/>}
       >
        <div className='timeline-content-second md:w-[359px] md:h-[220px]'>
         <h3>April 05, 2021</h3>   
         <h2>Start Development</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

       <VerticalTimelineElement className='vertical-timeline-element--education box'
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BiCircle/>}

       >
        <div className='timeline-content md:w-[359px] md:h-[220px]'>
         <h3>May 20, 2021</h3>   
         <h2>Pre Sale Launch</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

       <VerticalTimelineElement className='vertical-timeline-element--education '
       iconStyle={{background:'#F5a6a4', color:'#fff'}}
       icon={<BsChevronDown/>}
       >
        <div className='timeline-content-second md:w-[359px] md:h-[220px]'>
         <h3>June 15, 2021</h3>   
         <h2>Launch The Platform</h2>
         <p>Duis hendrerit dui ut massa fermentum lobortis. In luctus justo quis sapien placerat blandit.</p>
        </div>
       </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    </div>
    </div>
  )
}

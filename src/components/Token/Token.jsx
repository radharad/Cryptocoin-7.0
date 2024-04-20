import React from 'react'
import './Token.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export const data =  {
   // labels: ['Top Cummunity','Reserved Fund','Advisor Team','Sold Globaly','Financial'],
    datasets: [
      {
       // labels: ['#a'],
        data: [10,8,12,50,20],
        backgroundColor: [
            '#e9734a',
            '#efe943',
            '#0ba1d6',
            '#4fc489',
            '#4845b4',  
        ],
        borderColor: [
          '#e9734a',
          '#efe943',
          '#0ba1d6',
          '#4fc489',
          '#4845b4',   
        ],
        borderWidth: 1,
      },
    ],
   
  };

  export const dataTwo =  {
    //labels: ['Top Cummunity','Reserved Fund','Advisor Team','Sold Globaly','Financial'],
    datasets: [
      {
       // label: '#a',
        data: [20,50,25,15,7],
        backgroundColor: [
          '#e9734a',
          '#efe943',
          '#0ba1d6',
          '#4fc489',
          '#4845b4',  
        ],
        borderColor: [
          '#e9734a',
          '#efe943',
          '#0ba1d6',
          '#4fc489',
          '#4845b4',  
        ],
        borderWidth: 1,
      }, 
    ], 
  };
 export default function Token() {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
     disable: window.innerWidth < 800
    })
  },[])
   return (
    <div className='overflow-x-hidden md:w-[1140px] mx-auto md:pb-[50px] md:pt-[110px] pt-[60px]'>
        <h3 className='head-1 text-center'>Token Details</h3>
        <h2 className='head-2 text-center'>Token Distribution</h2>
     <div className='grid md:grid-cols-2 grid-cols-1'>
      
       <div className='md:h-[400px] md:w-[400px] p-[10px] relative z-[1]'  data-aos="zoom-in" data-aos-delay="500">
       <img src='images/bitcoin-icon.png' className='bitcoinIcon'  alt=''/>
        <Pie data={data}/>
       <div className="labels grid grid-cols-1">
          <div className="items">
    <div className="colors">
      <span className='bg-[#e9734a]'></span>
  </div> 
  <div className="des">
      <strong>10%</strong>
      <small>Top Cummunity</small>
  </div>
</div>

<div className="items">
   <div className="colors">
    <span className='bg-[#efe943]'></span>
   </div>
   <div className="des">
      <strong>08%</strong>
      <small>Reserved Fund</small>
   </div>
  </div>                  
                 
<div className="items">
  <div className="colors">
    <span className='bg-[#0ba1d6]'></span>
  </div>
  <div className="des">
    <strong>12%</strong>
    <small>Advisor Team</small>
  </div>
  </div>
                  
  <div className="items">
    <div className="colors">
      <span className='bg-[#4fc489]'></span>
    </div>
    <div className="des">
      <strong>50%</strong>
      <small>Sold Globaly</small>
    </div>
  </div>

  <div className="items">
    <div className="colors">
      <span className='colors bg-[#4845b4]'></span>
    </div>
    <div className="des">
      <strong>20%</strong>
      <small>Financial</small>
    </div>
  </div>
           
    </div>
    </div>
        
       <div className='md:min-h-[400px] md:w-[400px] p-[10px] grid grid-cols-1 md:ml-[180px] '>

       <div className="labels grid grid-cols-1 md:order-1 order-2 md:ml-[200px] ">
      
       <div className="items">
              <div className="colors">
                <span className='bg-[#e9734a]'></span>
            </div> 
            <div className="des">
                <strong>20%</strong>
                <small>Top Cummunity</small>
            </div>
          </div>

       <div className="items">
             <div className="colors">
              <span className='bg-[#efe943]'></span>
             </div>
             <div className="des">
                <strong>50%</strong>
                <small>Reserved Fund</small>
             </div>
            </div>                  
                           
         <div className="items">
            <div className="colors">
              <span className='bg-[#0ba1d6]'></span>
            </div>
            <div className="des">
              <strong>25%</strong>
              <small>Advisor Team</small>
            </div>
            </div>
                            
            <div className="items">
              <div className="colors">
                <span className='bg-[#4fc489]'></span>
              </div>
              <div className="des">
                <strong>15%</strong>
                <small>Sold Globaly</small>
              </div>
            </div>

            <div className="items">
              <div className="colors">
                <span className='colors bg-[#4845b4]'></span>
              </div>
              <div class="des">
                <strong>07%</strong>
                <small>Financial</small>
              </div>
            </div>
      </div>
      <div className='relative z-[1]' >
      <img src='images/bitcoin-icon.png' className='bitcoinIconTwo' alt=''/>
      </div>
       <Pie data={dataTwo} className='md:order-2 order-1' data-aos="zoom-in" data-aos-delay="300"/> 
       </div>
     </div>
     </div>
   )
 }
  


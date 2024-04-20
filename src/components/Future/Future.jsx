import React, { useEffect, useRef, useState } from 'react'
import './Future.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Future() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMiniutes, setTimerMiniutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();
     const startTimer = () => {
        const countdownDate = new Date ('January 1, 2025 00:00:00').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60 )));
            const miniutes = Math.floor((distance % (1000 * 60 * 60)/(1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)/(1000)));

            if (distance < 0){
                //stop our timer
                clearInterval(interval.current)
            }else{
                //update timer
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMiniutes(miniutes)
                setTimerSeconds(seconds)
            }
        },1000)
    }
    //component Did Mount
    useEffect(() => { 
       Aos.init({
        duration: 1000,
        disable: window.innerWidth < 800
      })
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })
  return (
    <div className='text-[#fff] overflow-hidden md:mt-[40px] mt-[20px]'>
    <div className='grid md:grid-cols-2 grid-cols-1 bgfeature py-[50px]  md:p-[100px] p-[20px]'>

     <div className='first' data-aos="fade-up" data-aos-delay="300">
        <h3>Sale Token</h3>
        <h2>Future digit mining<br/> crypto currency</h2>
        <p className='text-red-200 md:w-[500px] '>Nulla vitae mauris vitae urna commodo tristique malesuada eu quam. Fusce mattis a tortor vel finibus. Nunc nec orci ex. Nulla eleifend fermentum purus sit amet ultrices. Duis viverra id nisl eu condimentum. Nullam maximus vel nunc ac imperdiet. Sed mauris ipsum, varius nec turpis finibus, luctus laoreet risus.</p>
        <p className='text-red-200 md:w-[510px] '>Nullam mollis eget mauris ut posuere. Phasellus nec commodo neque. Sed pulvinar lobortis tellus, vitae auctor lacus ullamcorper a. Donec iaculis porta urna et sodales. I</p>
     </div>

     <div className='second' data-aos="fade-up" data-aos-delay="500">
        <div className='timer grid md:grid-cols-4 grid-cols-1 gap-5'>
          
            <div className='timing'>
            <div className='time bg-red-400'>
                <p>{timerDays}</p>
                <h6>Days</h6>
            </div>    
            </div>

            <div className='timing'>
                <div className='time bg-red-400'>
                <p>{timerHours}</p>
                <h6>Hours</h6>
                </div>
            </div>

            <div className='timing'>
            <div className='time bg-red-400'>
                <p>{timerMiniutes}</p>
                <h6>Mins</h6>
            </div>    
            </div>

            <div className='timing'>
            <div className='time bg-red-400'>
                <p>{timerSeconds}</p>
                <h6>Secs</h6>
            </div>    
            </div>
        </div>
    <div className='grid md:grid-cols-2 grid-cols-1 p-[20px] pt-[40px]'>
     <div className='data'>
        <h5>START DATE</h5>
        <h6 className='text-red-200'>JUNE 08, 2021 - 24.00 PM GMT</h6>
     </div>
     <div className='data'>
        <h5>END DATE</h5>
        <h6 className='text-red-200'>JUNE 20, 2021 - 24.00 PM GMT</h6>
     </div>
     <div className='data'>
        <h5>TOKEN AMOUNT</h5>
        <h6 className='text-red-200'>5,000,000.000 ICC</h6>
     </div>
     <div className='data'>
        <h5>EXCHANGE RATE</h5>
        <h6 className='text-red-200'>1 ETH = 2000 ICC, 1 BTC = 3000 ICC</h6>
     </div>
     <div className='data'>
        <h5>TOKEN CURRENCIES</h5>
        <h6 className='text-red-200'>ETH, BTC, LTC</h6>
     </div>
     <div className='data'>
        <h5>MINIMUM AMOUNT</h5>
        <h6 className='text-red-200'>20 ETH / BTC</h6>
     </div>
    </div>
    <button className='rounded-[23px] bg-red-400 font-bold w-[100%] max-w-[192px] h-[48px] leading-[46px] px-[10px] text-[16px] text-center md:ml-[200px] ml-[80px]'> Learn More </button>
     </div>
    </div>
    </div>
  )
}

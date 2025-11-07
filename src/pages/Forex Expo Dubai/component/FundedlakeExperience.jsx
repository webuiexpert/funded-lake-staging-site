import React from 'react'
import AnimateComponent from '../../../Components/AnimateComponent'

function FundedlakeExperience() {
  return (
    <div className='lg:pt-28 md:pt-24 pt-20 lg:pb-16 md:pb-10 pb-8 relative'>
        <AnimateComponent />
        <div className='max-w-7xl mx-auto lg:px-0 px-4 relative z-50'>
            <h3 className='text-center text-[#fff] lg:text-[3.2rem] md:text-[2.4rem] text-[1.6rem] font-bold leading-[1.2em] uppercase lg:mt-10'>Forex Expo Dubai 2025 — <br /> Inside FundedLake’s Experience</h3>
            <div className="forex-vdo lg:max-w-5xl md:max-w-[95%] mx-auto border lg:rounded-4xl md:rounded-3xl rounded-2xl lg:h-[620px] md:h-[460px] h-80 bg-black my-10 lg:px-8 lg:py-9 md:py-5 md:px-6 p-4 ">
                 <div className='overflow-hidden h-full rounded-2xl'>
                    <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/SvyS9jZ74RI?si=TEW0FtenCbZ1fgTv"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                 </div>
            </div>
        </div>
    </div>
  )

}



export default FundedlakeExperience
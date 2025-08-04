import React from 'react'

function Hero() {
  return (
    <div className='flex lg:justify-between items-center max-lg:flex-col   '>
      <div className='flex flex-col gap-7  lg:w-[38%]'>
        <h1 className='text-6xl lg:w-[80%] leading-relaxed font-bold '>Find ,book ,rent a car - quick and super easy !</h1>
        <p className='text-gray-500 text-xl w-[80%]'>Stream line your car rental experience with our effortless booking process.</p>
        <button className='bg-blue-700 text-white rounded-3xl p-2 w-[10rem] text-xl'>Explore Cars</button>
      </div>
      <div className='lg:w-[50%] overflow-hidden  max-lg:relative '>
        <img src="hero.png" className='lg:w-[75%]  ' alt="" />
        <img src="hero-bg.png" className='absolute top-[-30]   right-[-400] xl:h-[50rem]  z-[-1] w-[65%] max-lg:w-full max-lg:top-[-10] max-lg:left-20' alt="" />
      </div>
    </div>
  )
}

export default Hero

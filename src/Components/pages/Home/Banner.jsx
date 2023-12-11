import React from 'react'


export default function Banner() {
  return (
    <div className='h-[600px] w-screen' id='banner'>
        <div className='w-[50vw] h-full flex flex-col items-start ml-[10rem] justify-between py-[6rem]'>

        <h1 id='banner_head'>Fresh Fish @
        <br />
         Your Door Step</h1>
         <p className='text-[25px] '>Get 50% Off On First Order. Use Code <span className='text-[#176BA4] font-semibold'>FIRST50</span></p>
        <button className='px-10 py-5 bg-[#176BA4] rounded-full text-white'>Order Now </button>
        </div>
        <div className='w-[50vw]'>
        </div>
    </div>
  )
}

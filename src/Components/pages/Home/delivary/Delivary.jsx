import React from 'react'
import playstore from './../../../assets/gplay.png'
import applestore from './../../../assets/applestore.png'
import deliboy from './../../../assets/delboy.png'

export default function Delivary() {
  return (
    <div className='   w-full flex flex-col '>


        <div className='h-[267px] bg-[#D4EDFF] mt-[6rem] w-[90vw] relative mx-auto rounded-2xl flex justify-between items-center mb-[15rem] px-[6rem]' >
            <div>
                <h1 id='delhead' className='w-[45%] font-medium'>Delivered Fresh to Your Doorstep with BlueFin</h1>
            </div>


    <img src={deliboy}  className='absolute bottom-0 left-[25rem]' alt="" />



            <div className='w-[30%] '>
                <div className='flex flex-col gap-4'>
                <h1 className='text-[28px] font-medium'>Download App</h1>
                <div className='flex gap-10'>
                    <img src={playstore} alt="" />
                    <img src={applestore} alt="" />
                </div>
                </div>
            </div>
        </div>
   
    </div>
  )
}

import React from 'react'
import button from '../../Images/Button2.png'
import button4 from '../../Images/Button4.png'
import avatar from '../../Images/User3.png'
import Image from 'next/image'

const Top = () => {
  return (
    <div className='px-10 py-3 flex flex-col  justify-center'>
        <div className='flex justify-between'>
        <Image src={button} className='h-[40px] w-[40px]'></Image>
        <Image src={button4} className='h-[40px] w-[40px]'></Image>
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
            <Image src={avatar} className='h-[120px] w-[150px] mt-4'></Image>
            <div className='text-[#6B7A99] text-[roboto] text-[16px] font-bold'>Hello Alfred Bryant</div>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px] font-bold'>adrain.nader@yahoo.com</div>
        </div>
    </div>
  )
}

export default Top

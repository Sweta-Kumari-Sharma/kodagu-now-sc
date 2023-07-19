import React from 'react'
import Icon3 from '../../Images/Icon (3).png'
import Image from 'next/image'

const Left = () => {
  return (
    <div className='flex space-x-4 items-center'>
        <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-[50%]'>
            <Image src={Icon3} ></Image>
        </div>
        <div className='text-[#4D5E80] text-[roboto] text-[18px] font-bold'>Constructor</div>
    </div>
  )
}

export default Left

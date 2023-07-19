import React from 'react'
import dot from '../../Images/Icon9.png'
import clip from '../../Images/Icon20.png'
import arrow from '../../Images/Icon12.png'
import flag from '../../Images/Icon14.png'
import cloud from '../../Images/Icon11.png'
import comment from '../../Images/Icon10.png'
import avatar from '../../Images/Avatar Image (11).png'
import close from '../../Images/Icon15.png'
import right from '../../Images/ChevronRight.png'
import button from '../../Images/Button5.png'
import Image from 'next/image'

const DevBox = () => {
  return (
    <div className='hidden md:block w-[350px] h-[340ppx] bg-white pt-6'>
        <div className='flex justify-between px-4 '>
            <div className=' text-[12px] text-[roboto] text-[#4D5E80] font-bold flex items-center  space-x-4 px-2 py-2'>
                <Image src={dot}/>
                <div>Development Apps</div>
                <Image src={clip}/>
            </div>
            <Image src={close} className='h-[14px] w-[14px] m-2'></Image>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-0 justify-items-start px-16 my-10 rounded-3xl ">
            <div className='flex items-center justify-center  py-4 space-x-2  '>
                <Image src={arrow} className='h-[20px] w-[20px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>4 Subtasks</div>
            </div>
            <div className='flex items-center justify-center  py-4 space-x-2  '>
                <Image src={flag} className='h-[20px] w-[20px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Priority Enabled</div>
            </div>
            <div className='flex items-center justify-center  py-4 space-x-2  '>
                <Image src={cloud} className='h-[20px] w-[20px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>3 Files</div>
            </div>
            <div className='flex items-center justify-center  py-4 space-x-2  '>
                <Image src={comment} className='h-[20px] w-[20px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>7 comments</div>
            </div>
            <div className='flex items-center justify-center  py-4 space-x-2  '>
                <Image src={avatar} className='h-[20px] w-[20px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Taylor Norman</div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center justify-between px-2   '>
                <div className='text-[#7D8FB3] text-[roboto] text-[11px]'>START DATE</div>
                <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Sep 3, 9:00 pm</div>
            </div>
            <Image src={right} className='w-[7px] h-[12px]'/>
            <div className='flex flex-col items-center justify-between px-2   '>
                <div className='text-[#7D8FB3] text-[roboto] text-[11px]'>DUE DATE</div>
                <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Sep 4, 9:00 pm</div>
            </div>
            <div className='flex items-center justify-center  py-4 space-x-1 hover:border-b-4 hover:border-b-[#3361FF] '>
                <Image src={button} className='h-[25px] w-[25px]'/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>1 Day Left</div>
            </div>
        </div>
    </div>
  )
}

export default DevBox

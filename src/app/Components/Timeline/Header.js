import Image from 'next/image'
import React from 'react'
import playlist from '../../Images/Icon (7).png'
import boards from '../../Images/Icon (6).png'
import calender from '../../Images/Icon (5).png'
import gantt  from '../../Images/Icon (4).png'
import timeline from '../../Images/Icon (3).png'
import activity from '../../Images/Icon (2).png'
import search from '../../Images/search.png'

const Header = () => {
  return (
    <div className=' flex  items-center justify-between px-6 md:px-0'>
        <div className='w-[70%] md:w-[100%]  flex space-x-14 px-4 items-center justify-center border-b overflow-hidden'>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={playlist} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>List Tasks</div>
        </div>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={boards} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>Boards</div>
        </div>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={calender} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>Calender</div>
        </div>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={gantt} className='h-[15px] w-[15px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>Gantt</div>
        </div>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={timeline} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>Timeline</div>
        </div>
        <div className='flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] '>
            <Image src={activity} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] text-[roboto] text-[12px]'>Activity</div>
        </div>
        <div className='flex  space-x-6 w-[200px] h-[30px] bg-white items-center rounded-3xl'>
        <div className='hidden md:flex items-center space-x-3 pl-2 '>
            <Image src={search} className='h-[24px] w-[24px]'/>
            <input placeholder='Search Tasks' className='font-[12px] text-[roboto] text-[#ADB8CC] w-[150px]'/>
            </div>
        </div>
        </div>
        <Image src={search} className='md:hidden h-[24px] w-[24px] bg-white rounded-[50%] '/>
    </div>
  )
}

export default Header

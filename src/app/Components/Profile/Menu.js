import Image from 'next/image'
import React from 'react'
import dashboard from '../../Images/dashboard.png'
import playlist from '../../Images/playlist_add_check2.png'
import playlist2 from '../../Images/playlist_add_check.png'
import cloud from '../../Images/cloud.png'
import email from '../../Images/email.png'
import group from '../../Images/group.png'
import calender from '../../Images/event.png'
import setting from '../../Images/build.png'

const Menu = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-0 px-16 my-10 rounded-3xl ">
        <div className='flex flex-col items-center justify-center border py-4 space-y-2 hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={dashboard} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Dashboard</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={playlist2} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Tasks</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={email} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Emails</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={calender} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Calenders</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={playlist} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF]  text-[roboto] text-[11px]'>Notes</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={cloud} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Files</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={group} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Clients</div>
        </div>
        <div className='flex flex-col items-center justify-center border hover:bg-white hover:mx-[-4px] hover:my-[-6px] rounded-lg'>
            <Image src={setting} className='h-[30px] w-[30px]'/>
            <div className='text-[#ADB8CC] hover:text-[#3361FF] text-[roboto] text-[11px]'>Settings</div>
        </div>
    </div>
  )
}

export default Menu

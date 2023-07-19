import React from 'react'
import NewTab from '../../Images/NewTab.png'
import hori from '../../Images/more_horiz.png'
import Image from 'next/image'
import image from '../../Images/Image (1).png'
import avatar16 from '../../Images/Avatar Image16.png'
import playlist from '../../Images/Icon (7).png'
import list from '../../Images/Icon19.png'
import clipboard from '../../Images/Icon18.png'
import clock from '../../Images/Icon13.png'
import avatar11 from '../../Images/Avatar Image (5).png'
import avatar15 from '../../Images/Avatar Image (15).png'
import avatar14 from '../../Images/Avatar Image (14).png'
import base from '../../Images/Base.png'
import avatar7 from '../../Images/Avatar Image (7).png'
import avatar9 from '../../Images/Avatar Image (9).png'
import avatar4 from '../../Images/Avatar Image (4).png'
import avatar13 from '../../Images/Avatar Image (13).png'

const ColFirst = () => {
  return (
    <div className=''>
        <div className=' py-2 bg-white'>
            <div className='bg-white text-[12px] px-4 text-[roboto] text-[#4D5E80] flex items-center justify-center space-x-4 border-l-4 border-[#8833FF] '>
                <div>TO DO</div>
                <div className='bg-white border border-[#4D5E80] text-[11px] rounded-[50%] h-[20px] w-[20px] flex items-center justify-center'>5</div>
                <Image src={hori}/>
                <Image src={NewTab} className="h-[14px] w-[14px]"></Image>
            </div>
        </div>

        <div className='bg-white my-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <Image src={image}></Image>
            <div className='flex items-center justify-between px-2  pt-4 space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar16} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Make Money Online Through</div>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center justify-center  py-4 space-x-1   '>
                    <Image src={list} className=''/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>4</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1  '>
                    <Image src={clipboard} className='h-[11px] w-[22px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>2</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1   '>
                    <Image src={clock} className='h-[20px] w-[20px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>6 Days Left</div>
                </div>
            </div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2'>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <div className='flex'>
                    <Image src={avatar7} className=''/>
                    <Image src={avatar15} className='ml-[-5px]'/>
                </div>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Make Money Online Through</div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2'>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <div className='flex'>
                    <Image src={base} className=''/>
                    <Image src={avatar9} className='ml-[-5px]'/>
                    <Image src={avatar14} className='ml-[-5px]'/>
                </div>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Search Engine Optimization...</div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2  hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar13} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Characteristics Of A Successful</div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2 '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar4} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Getting Free Publicity</div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2 '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar11} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Importance Of The Custom..</div>
        </div>
        <button className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>+ NEW TASK</button>
    </div>
  )
}

export default ColFirst

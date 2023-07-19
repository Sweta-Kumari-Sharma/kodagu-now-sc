import React from 'react'
import NewTab from '../../Images/NewTab.png'
import hori from '../../Images/more_horiz.png'
import Image from 'next/image'
import playlist from '../../Images/Icon (7).png'
import image from '../../Images/Image (2).png'
import avatar10 from '../../Images/Avatar Image (10).png'
import avatar6 from '../../Images/Avatar Image (6).png'
import avatar5 from '../../Images/Avatar Image (5).png'
import avatar11 from '../../Images/Avatar Image (4).png'
import avatar16 from '../../Images/Avatar Image16.png'
import list from '../../Images/Icon19.png'
import clipboard from '../../Images/Icon18.png'
import clock from '../../Images/Icon16.png'

const ColSecond = () => {
  return (
    <div>
        <div className=' py-2 bg-white'>
            <div className='bg-white text-[12px] text-[roboto] text-[#4D5E80] flex items-center justify-center space-x-4 border-l-4 border-l-[#33BFFF] px-4'>
                <div>IN WORK</div>
                <div className='bg-white border border-[#4D5E80] text-[11px] rounded-[50%] h-[20px] w-[20px] flex items-center justify-center'>5</div>
                <Image src={hori}/>
                <Image src={NewTab} className="h-[14px] w-[14px]"></Image>
            </div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar11} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Types Of Paper In Catalog</div>
        </div>
        <div className='bg-white my-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <Image src={image}></Image>
            <div className='flex items-center justify-between px-2  pt-4 space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar16} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Make Money Online Through</div>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center justify-center  py-4 space-x-1 '>
                    <Image src={playlist} className='h-[30px] w-[30px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>4</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1 '>
                    <Image src={playlist} className='h-[30px] w-[30px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>2</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1  '>
                    <Image src={playlist} className='h-[30px] w-[30px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>6 days left</div>
                </div>
            </div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg'>
            <div className='flex items-center justify-between px-2   space-x-2'>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar10} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Development Apps</div>
        </div>
        <div className='bg-white hover:border-2 hover:border-[#FF6633] rounded-lg my-4 py-4'>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar5} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Copper Canyon</div>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center justify-center  py-4 space-x-1   '>
                    <Image src={list} className=''/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>4</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1   '>
                    <Image src={clipboard} className='h-[11px] w-[22px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>2</div>
                </div>
                <div className='flex items-center justify-center  py-4 space-x-1   '>
                    <Image src={clock} className='h-[20px] w-[20px]'/>
                    <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>1 Day Left</div>
                </div>
            </div>
        </div>
        <button className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>+ NEW TASK</button>
    </div>
  )
}

export default ColSecond

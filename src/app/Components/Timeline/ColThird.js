import React from 'react'

import NewTab from '../../Images/NewTab.png'
import hori from '../../Images/more_horiz.png'
import Image from 'next/image'
import avatar16 from '../../Images/Avatar Image16.png'
import avatar10 from '../../Images/Avatar Image (10).png'
import avatar4 from '../../Images/Avatar Image (4).png'
import avatar9 from '../../Images/Avatar Image (9).png'
import close from '../../Images/Icon15.png'
import flag from '../../Images/Icon14.png'
import clip from '../../Images/Icon18.png'
import clock from '../../Images/Icon13.png'

const ColThird = () => {
  return (
    <div>
        <div className=' py-2 bg-white'>
            <div className='bg-white text-[12px] text-[roboto] text-[#4D5E80] flex items-center justify-center space-x-4 border-l-4 border-[#FFCB33] px-4 '>
                <div>REVIEW</div>
                <div className='bg-white border border-[#4D5E80] text-[11px] rounded-[50%] h-[20px] w-[20px] flex items-center justify-center'>5</div>
                <Image src={hori}/>
                <Image src={NewTab} className="h-[14px] w-[14px]"></Image>
            </div>
        </div>
        <div className='bg-white my-4 py-4 hover:border-2 hover:border-[#FF6633] rounded-lg '>
            <div className='flex items-center justify-between px-2   space-x-2 '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 3</div>
                <Image src={avatar10} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Astronomy Or Astrology</div>
        </div>
        <div className='bg-white my-4 py-4  hover:border-2 hover:border-[#FF6633] rounded-lg '>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 1</div>
                <Image src={avatar4} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Astronomy Binoculars A Great</div>
        </div>
        <div className='bg-white my-4 py-4  hover:border-2 hover:border-[#FF6633] rounded-lg '>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <Image src={close} className=''/>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Task name or type</div>
                <Image src={avatar9} className=''/>
            </div>
            <div className='flex items-center justify-between px-2  mt-4 space-x-2  '>
                <Image src={flag} className=''/>
                <Image src={clip} className=''/>
                <Image src={clock} className=''/>
                <button className='text-white px-2 font-bold text-[roboto] text-[10px] bg-[#3361FF] w-[43px] h-[30px] rounded-lg'>Save</button>
            </div>
            
        </div>
    </div>
  )
}

export default ColThird

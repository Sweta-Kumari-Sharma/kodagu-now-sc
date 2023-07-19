import React from 'react'

import NewTab from '../../Images/NewTab.png'
import hori from '../../Images/more_horiz.png'
import Image from 'next/image'
import avatar16 from '../../Images/Avatar Image (10).png'

const ColFourth = () => {
  return (
    <div>
        <div className='bg-white text-[12px] text-[roboto] text-[#4D5E80] flex items-center justify-center space-x-4 border-l-4 border-[#29CC39] px-4 py-2'>
            <div>DONE</div>
            <div className='bg-white border border-[#4D5E80] text-[11px] rounded-[50%] h-[20px] w-[20px] flex items-center justify-center'>5</div>
            <Image src={hori}/>
            <Image src={NewTab} className="h-[14px] w-[14px]"></Image>
        </div>
        <div className='bg-white my-4 py-4  hover:border-2 hover:border-[#FF6633] rounded-lg '>
            <div className='flex items-center justify-between px-2   space-x-2  '>
                <div className='text-[#ADB8CC] text-[roboto] text-[11px]'>Space Tasks 2</div>
                <Image src={avatar16} className=''/>
            </div>
            <div className='text-[#4D5E80] px-2 font-bold text-[roboto] text-[12px]'>Copper Canyon</div>
        </div>
    </div>
  )
}

export default ColFourth

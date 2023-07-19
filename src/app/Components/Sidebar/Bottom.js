import Image from 'next/image'
import React from 'react'
import avatar from '../../Images/Avatar Image (1).png'
import avatar1 from '../../Images/Avatar Image (2).png'
import avatar2 from '../../Images/Avatar Image.png'
import avatar3 from '../../Images/Avatar Image (3).png'
import button from '../../Images/Button (1).png'

const Bottom = () => {
  return (
    <div className='space-y-2'>
      <Image src={avatar} className='h-[50px] w-[50px]'></Image>
      <Image src={avatar3} className='h-[50px] w-[50px]'></Image>
      <Image src={avatar2} className='h-[50px] w-[50px]'></Image>
      <Image src={avatar1} className='h-[50px] w-[50px]' ></Image>
      <Image src={button} className='h-[50px] w-[50px]' ></Image>
    </div>
  )
}

export default Bottom

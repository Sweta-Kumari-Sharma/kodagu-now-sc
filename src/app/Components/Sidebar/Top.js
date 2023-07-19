import Image from 'next/image'
import React from 'react'
import button from '../../Images/Button.png'
import star from '../../Images/2.png'
import msg from '../../Images/3.png'
import graph from '../../Images/4.png'
import web from '../../Images/5.png'
import building from '../../Images/6.png'

const Top = () => {
  return (
    <div className='space-y-2'>
      <Image src={button} className='h-[50px] w-[50px]'></Image>
      <Image src={star} className='h-[50px] w-[50px]'></Image>
      <Image src={msg} className='h-[50px] w-[50px]'></Image>
      <Image src={graph} className='h-[50px] w-[50px]' ></Image>
      <Image src={web} className='h-[50px] w-[50px]'></Image>
      <Image src={building} className='h-[50px] w-[50px]'></Image>
    </div>
  )
}

export default Top

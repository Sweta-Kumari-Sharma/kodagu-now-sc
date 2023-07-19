import React from 'react'
import telegram from '../../Images/ic_telegram.png'
import wp from '../../Images/ic_whatsapp.png'
import reader from '../../Images/chrome_reader_mode.png'
import phone from '../../Images/local_phone.png'
import email from '../../Images/email.png'
import Image from 'next/image'

const Bottom = () => {
  return (
    <div className='flex space-x-1 rounded-3xl px-4 py-2 justify-between items-center border w-[70%] mx-auto mt-[200px]'>
      <Image src={phone}/>
      <Image src={email}/>
      <Image src={reader}/>
      <Image src={telegram}/>
      <Image src={wp}/>
    </div>
  )
}

export default Bottom

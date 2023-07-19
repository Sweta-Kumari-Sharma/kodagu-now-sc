import Image from 'next/image'
import React from 'react'
import hori from '../../Images/more_horiz.png'

const Menu = () => {
  return (
    <div className='hidden md:flex text-[13px] text-[roboto] text-[#7D8FB3] space-x-6 items-center'>
      <div>Dashboard</div>
      <div>About Us</div>
      <div>News</div>
      <div>User Policy</div>
      <div>Contacts</div>
      <Image src={hori}/>
    </div>
  )
}

export default Menu

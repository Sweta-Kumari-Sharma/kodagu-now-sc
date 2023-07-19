import Image from 'next/image'
import React from 'react'
import search from '../../Images/search.png'
import ChevronLeft from '../../Images/ChevronRight.png'

const Search = () => {
  return (
    <div className='hidden md:flex  space-x-6 w-[430px] h-[50px] bg-white items-center rounded-lg'>
      <div className='flex items-center space-x-3 pl-2'>
        <Image src={search}/>
        <input placeholder='Search Products, Orders and Clients' className='text-[12px] text-[roboto] text-[#ADB8CC] w-[300px]'/>
      </div>
      <Image src={ChevronLeft} className='w-[30px] h-[30px] flex justify-end'/>
      
    </div>
  )
}

export default Search

import React from 'react'
import Header from './Header'
import ColFirst from './ColFirst'
import ColSecond from './ColSecond'
import ColThird from './ColThird'
import ColFourth from './ColFourth'
import DevBox from './DevBox'

const Timeline = () => {
  return (
    <div className='border rounded-lg '>
      <Header/>
      <div className='bg-[#F7F8FA] mb-20 '>
        <div className='flex space-x-8 mt-4 px-6 pb-6 relative overflow-hidden'>
          <ColFirst/>
          <ColSecond/>
          <ColThird/>
          <ColFourth/>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-[-45%] md:-translate-x-[-101%] -translate-y-[-80%]'>
          <DevBox/>
        </div>
      </div>
    </div>
  )
}

export default Timeline

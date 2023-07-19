import React from 'react'
import Header from './Header'
import ColFirst from './ColFirst'
import ColSecond from './ColSecond'
import ColThird from './ColThird'
import ColFourth from './ColFourth'
import DevBox from './DevBox'
import LastCombined from './LastCombined'

const Timeline = () => {
  return (
    <div className='border rounded-lg mt-6'>
      <Header/>
      <div className='bg-[#F7F8FA] mb-20 max-w-[100vw] overflow-auto'>
        <div className='flex space-x-8 mt-4 px-6 pb-6 relative w-[100%] '>
          <ColFirst/>
          <ColSecond/>
          <LastCombined/>
          {/* <ColThird/>
          <ColFourth/> */}
        </div>
        {/* <div className='absolute md:top-1/2 md:left-1/2 -translate-x-[-45%] md:-translate-x-[-101%] -translate-y-[-80%]'>
          <DevBox/>
        </div> */}
      </div>
    </div>
  )
}

export default Timeline

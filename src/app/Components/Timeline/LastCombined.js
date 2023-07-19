import React from 'react'
import ColThird from './ColThird'
import ColFourth from './ColFourth'
import DevBox from './DevBox'

const LastCombined = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex space-x-8'>
            <ColThird/>
            <ColFourth/>
        </div>
        <div className='flex justify-center my-16'>
            <DevBox/>
        </div>
    </div>
  )
}

export default LastCombined

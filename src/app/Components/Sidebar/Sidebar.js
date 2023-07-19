import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Sidebar = () => {
  return (
    <div className='hidden md:flex md:flex-col space-y-40 border-r px-6 py-3'>
      <Top/>
      <Bottom/>
    </div>
  )
}

export default Sidebar

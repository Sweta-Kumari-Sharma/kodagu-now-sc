import React from 'react'
import Left from './Left'
import Search from './Search'
import Right from './Right'
import Menu from './Menu'

const Navbar = () => {
  return (
        <div className='flex h-[80px] items-center justify-between px-6 border-b'>
            <Left/>
            <Menu/>
            <Search/>
            <Right/>
        </div>
  )
}

export default Navbar

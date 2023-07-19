import React from 'react'
import Top from './Top'
import Menu from './Menu'
import Bottom from './Bottom'

const Profile = () => {
  return (
    <div className='hidden md:block w-[28%]'>
        <Top/>
        <Menu/>
        <Bottom/>
    </div>
  )
}

export default Profile

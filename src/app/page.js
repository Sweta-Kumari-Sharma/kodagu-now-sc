import Image from 'next/image'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Profile from './Components/Profile/Profile'
import Timeline from './Components/Timeline/Timeline'

export default function Home() {
  return (
    <>
      <div>
        <Header/>
        <div className='bg-[#F7F8FA]'>
          <Navbar/>
          <div className='flex'>
            <Sidebar/>
            <Profile/>
            <Timeline/>
          </div>
        </div>
        
      </div>
    </>
  )
}

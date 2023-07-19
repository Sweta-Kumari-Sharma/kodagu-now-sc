import Image from 'next/image'
import Close from '../../Images/Close.png'
import Minimize from '../../Images/Minimize.png'
import Zoom from '../../Images/Zoom.png'
import Sidebar from '../../Images/Sidebar.png'
import ChevronLeft from '../../Images/ChevronLeft.png'
import ChevronRight from '../../Images/ChevronRight.png'

const Left = () => {
  return (
    <div className='flex space-x-5 ml-8 my-2 items-center'>
        <div className='flex space-x-2 '>
        <Image src={Close} className="h-[12px] w-[12px]"></Image>
        <Image src={Minimize} className="h-[12px] w-[12px]"></Image>
        <Image src={Zoom} className="h-[12px] w-[12px]"></Image>
        </div>
        <div className=' hidden md:flex  space-x-2'>
        <Image src={Sidebar} className="h-[16px] w-[20px]"></Image>
        <Image src={ChevronLeft} className="h-[14px] w-[8px]"></Image>
        <Image src={ChevronRight} className="h-[14px] w-[8px]"></Image>
        </div>
    </div>
  )
}

export default Left

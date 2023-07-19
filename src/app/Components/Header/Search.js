import Image from 'next/image'
import Shield from '../../Images/Shield.png'
import Lock from '../../Images/Lock.png'
import Clockwise from '../../Images/Clockwise.png'

const Search = () => {
  return (
    <div className='hidden md:flex  space-x-5 ml-8 my-2 items-center'>
        <div className='flex space-x-2'>
        <Image src={Shield} className="h-[24px] w-[24px]"></Image>
        </div>
        <div className='grid grid-cols-[minmax(0,2fr),auto,minmax(0,-11fr)] gap-0 items-center  w-[622px] h-[28px] bg-[#F0F0F0] p-2  '>
        <div className='flex items-center justify-self-center'>
          <Image src={Lock} className="flex h-[14px] w-[13px] justify-self-center"></Image>
          <div className='mt-[-2px]  text-[#4C4C4C] text-[14px]'>constructor.spline.one</div>
        </div>
        <Image src={Clockwise} className="flex h-[14px] w-[13px] justify-self-end mt-[-30px]"></Image>
        </div>
    </div>
  )
}

export default Search

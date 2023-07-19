import Image from 'next/image'
import Icon from '../../Images/Icon.png'
import Icon1 from '../../Images/Icon (1).png'
import User from '../../Images/User.png'

const Right = () => {
  return (
    <div className='flex  space-x-6  text-[13px] text-[roboto] text-[#7D8FB3] items-center rounded-lg'>
        <Image src={User}/>
        
        <div className='hidden md:block'>Clayton Santos</div>
        <div className='hidden md:flex w-[50px] h-[50px] bg-white justify-center items-center rounded-[50%]'>
            <Image src={Icon} ></Image>
        </div>
        <div className='hidden md:flex w-[50px] h-[50px] bg-white justify-center items-center rounded-[50%]'>
            <Image src={Icon1} ></Image>
        </div>
    </div>
  )
}

export default Right

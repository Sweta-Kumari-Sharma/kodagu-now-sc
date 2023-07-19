import Image from 'next/image'
import Icon from '../../Images/Icon.png'
import Icon1 from '../../Images/Icon (1).png'
import button from '../../Images/Button (7.png'
import red from '../../Images/red.png'
import User from '../../Images/User.png'

const Right = () => {
  return (
    <div className='flex  space-x-6  text-[13px] text-[roboto] text-[#7D8FB3] items-center rounded-lg'>
        <Image src={User}/>
        
        <div className='hidden md:block'>Clayton Santos</div>
        <div className='hidden md:flex w-[50px] h-[50px] bg-white justify-center items-center rounded-[50%]'>
            <Image src={button} ></Image>
            <Image src={red} className='mt-[-30px] ml-[-10px]'></Image>

        </div>
        <div className='hidden md:flex w-[50px] h-[50px] bg-white justify-center items-center rounded-[50%]'>
            <Image src={Icon1} ></Image>
        </div>
    </div>
  )
}

export default Right

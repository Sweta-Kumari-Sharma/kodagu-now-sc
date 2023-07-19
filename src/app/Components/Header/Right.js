import Image from "next/image"
import Share from '../../Images/Share.png'
import NewTab from '../../Images/NewTab.png'
import TabOverview from '../../Images/TabOverview.png'

const Right = () => {
  return (
    <div className='flex space-x-4 py-4 mr-8'>
        <Image src={Share} className="h-[19px] w-[15px]"></Image>
        <Image src={NewTab} className="h-[14px] w-[14px]"></Image>
        <Image src={TabOverview} className="h-[18px] w-[18px]"></Image>
    </div>
  )
}

export default Right

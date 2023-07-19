"use client";
import Image from "next/image";
import React from "react";
import playlist from "../../Images/Icon (7).png";
import boards from "../../Images/Icon (6).png";
import calender from "../../Images/Icon (5).png";
import gantt from "../../Images/Icon (4).png";
import timeline from "../../Images/Icon (3).png";
import activity from "../../Images/Icon (2).png";
import search from "../../Images/search.png";
import Left from "../../Images/Button10.png";
import Right from "../../Images/Button11.png";
import search2 from "../../Images/Button12.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Header = () => {
  return (
    <div>
      <div className="hidden md:flex  items-center justify-between px-6 md:px-0 ">
        <div className="w-[70%] md:w-[100%]  flex space-x-12 px-4 items-center max-w-[70vw] md:max-w-[100%] overflow-auto justify-between border-b ">
          <div className="flex items-center justify-center w-[120px]  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={playlist} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              List Tasks
            </div>
          </div>
          <div className="flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={boards} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Boards
            </div>
          </div>
          <div className="flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={calender} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Calender
            </div>
          </div>
          <div className="flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={gantt} className="h-[15px] w-[15px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Gantt
            </div>
          </div>
          <div className="flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={timeline} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Timeline
            </div>
          </div>
          <div className="flex items-center justify-center  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={activity} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Activity
            </div>
          </div>
          <div className="hidden md:flex  space-x-6 w-[200px] h-[30px] bg-white items-center rounded-3xl">
            <div className="hidden md:flex items-center space-x-3 pl-2 ">
              <Image src={search} className="h-[24px] w-[24px]" />
              <input
                placeholder="Search Tasks"
                className="font-[12px] text-[roboto] text-[#ADB8CC] w-[150px]"
              />
            </div>
          </div>
          
        </div>
        <div className="search flex md:hidden max-w-[30vw]">
            <Image
            src={search}
            className=" h-[24px] w-[24px] bg-white rounded-[50%] "
            />
          </div>
      </div>
      <div className="md:hidden space-x-2 w-[100vw] flex items-center justify-between px-4">
        <div className=" ">
        <Carousel className="flex items-center justify-center w-[300px]">
           <div className="flex items-center mb-4 justify-center w-[80px] mx-auto py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={playlist} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px] w-[100px]">
              List Tasks
            </div>
          </div>
          <div className="flex items-center mb-4 justify-center w-[80px] mx-auto  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={boards} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Boards
            </div>
          </div>
          <div className="flex items-center mb-4 justify-center w-[80px] mx-auto  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={calender} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Calender
            </div>
          </div>
          <div className="flex items-center mb-4 justify-center w-[80px] mx-auto  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={gantt} className="h-[15px] w-[10px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Gantt
            </div>
          </div>
          <div className="flex items-center mb-4 justify-center w-[80px] mx-auto  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={timeline} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Timeline
            </div>
          </div>
          <div className="flex items-center mb-4 justify-center w-[80px] mx-auto  py-4 space-x-2 hover:border-b-4 hover:border-b-[#3361FF] ">
            <Image src={activity} className="h-[30px] w-[30px]" />
            <div className="text-[#ADB8CC] text-[roboto] text-[12px]">
              Activity
            </div>
          </div>
        </Carousel>
        </div>
        <div className="search ">
        <Image
            src={search2}
            className="seacrch mr-[20px] "
        />
        </div>
      </div>
    </div>
  );
};

export default Header;

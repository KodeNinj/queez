import React from 'react'
import { FaGamepad, FaDoorOpen } from 'react-icons/fa';

const LightSideNav = ({isDarks, setisDarks}) => {
  return (
      // light mode
      // light mode

    <div className='md:h-[100vh] md:min-w-[20vw] bg-[var(--white)] shadow-md hidden md:flex flex-col items-center justify-between pt-[30px] pb-[100px]'>
        {/* logo */}
        <h2 className='text-[var(--primaryBg)] text-2xl font-bold text-center'>QUEEZ<span className='text-[var(--brownColor)]'>EET</span></h2>

        {/* navigation btn */}
        <div>
            <ul className='text-lg min-w-full'>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--deepBlue)] ease transition text-[var(--grey)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium '><FaGamepad className='text-[var(--secondBg)]'/> Country vs Capital</li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--deepBlue)] ease transition text-[var(--grey)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--secondBg)]'/> Science Quiz</li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--deepBlue)] ease transition text-[var(--grey)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--secondBg)]'/> Entertainment Quiz </li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--deepBlue)] ease transition text-[var(--grey)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--secondBg)]'/> Tech Quiz</li>
            </ul>
        </div>

        {/* logout bottom */}
        <div className='text-lg font-bold' >
          <button className='flex items-center justify-center gap-2' onClick={()=>setisDarks(!isDarks)}><FaDoorOpen/> Go Home</button>
        </div>
    </div>
  )
}

export default LightSideNav
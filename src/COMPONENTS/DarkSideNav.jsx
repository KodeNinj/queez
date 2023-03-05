import React from 'react'
import { FaGamepad, FaDoorOpen } from 'react-icons/fa';
const DarkSideNav = ({isDarks, setisDarks}) => {
  return (
     // dark mode
    // dark mode

    <div className='md:h-[100vh] md:min-w-[20vw] bg-[var(--secondBg)] hidden md:flex flex-col items-center justify-between pt-[30px] pb-[100px] z-100'>
        {/* logo */}
        <h2 className='text-[var(--white)] text-2xl font-bold text-center'>QUEEZ<span className='text-[var(--brownColor)]'>EET</span></h2>

        {/* navigation btn */}
        <div>
            <ul className='text-lg min-w-full'>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--secondary)] ease transition text-[var(--white)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium '><FaGamepad className='text-[var(--brownColor)]'/> Country vs Capital</li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--secondary)] ease transition text-[var(--white)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--brownColor)]'/> Science Quiz</li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--secondary)] ease transition text-[var(--white)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--brownColor)]'/> Entertainment Quiz</li>
                <li className='flex justify-start items-center gap-3 pb-[30px] hover:text-[var(--secondary)] ease transition text-[var(--white)] duration-1000 cursor-pointer py-[15px] px-[10px] font-medium'><FaGamepad className='text-[var(--brownColor)]'/> Tech Quiz</li>
            </ul>
        </div>

        {/* logout bottom */}
        <div className='text-lg font-bold' >
          <button className='flex items-center justify-center gap-2' onClick={()=>setisDarks(!isDarks)}><FaDoorOpen/> Go Home</button>
        </div>
    </div>
  )
}

export default DarkSideNav
import React from 'react'
import { FaBars, FaHamburger, FaMoon, FaUserCircle } from 'react-icons/fa'
import LightSideNav from '../COMPONENTS/lightSideNav'
import bg from '../ASSETS/bg.png'
import design from '../ASSETS/design.png'
import HeaderImg from '../COMPONENTS/HeaderImg'
import SelectLevel from '../COMPONENTS/SelectLevel'
import TopNavLight from '../COMPONENTS/TopNavLight'
const HomeLight = ({setisDarks, isDarks, isDark, setisDark}) => {
  return (
    <div className='flex bg-[var(--white)] w-[100vw]'>
      <LightSideNav isDarks={isDarks} setisDarks={setisDarks}/>
      <div className='right w-full  max-h-screen px-[20px] relative z-[100] overflow-hidden'>
            <TopNavLight isDarks={isDarks} setisDarks={setisDarks}/>
            <HeaderImg/>
            <h3 className='text-2xl text-[var(--deepBlue)] font-bold text-center my-[10px]'>Select Level</h3>
            <SelectLevel/>
        </div>
        <div className='absolute z-[1] md:top-0 bottom-0 md:w-[80%] w-[200%] right-0 h-100 object-fill overflow-hidden'  >
                    <img src={design} alt="bg"/>
                </div>
  </div>
  )
}

export default HomeLight
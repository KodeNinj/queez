import React from 'react'
import DarkSideNav from '../COMPONENTS/DarkSideNav'
import { FaBars, FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import HeaderImg from '../COMPONENTS/HeaderImg'
import SelectLevel from '../COMPONENTS/SelectLevel'
import design from '../ASSETS/design.png'
import TopNavDark from '../COMPONENTS/TopNav'
const HomeDark = ({ isDarks,setisDarks}) => {
  return (
    <div className='flex  w-[100vw] h-screen overflow-hidden bg-[var(--primaryBg)] relative'>
        {/* side navigation */}
        <DarkSideNav isDarks={isDarks} setisDarks={setisDarks}/>
        <div className='right w-[100vw]  max-h-screen px-[20px] relative z-[100] overflow-hidden'>
            
               <TopNavDark isDarks={isDarks} setisDarks={setisDarks}/>
                <HeaderImg/>
                <h3 className='text-2xl text-[var(--white)] font-bold text-center my-[10px]'>Select Level</h3>
                <SelectLevel/>
            </div>
                <div className='absolute z-[1] md:top-0 bottom-0 md:w-[80%] w-[200%] right-0 h-100 object-fill overflow-hidden'  >
                    <img src={design} alt="bg"/>
                </div>
            </div>
  )
}

export default HomeDark
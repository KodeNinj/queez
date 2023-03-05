import React from 'react'
import { FaBars, FaHamburger, FaMoon, FaUserCircle } from 'react-icons/fa'
import LightSideNav from '../COMPONENTS/lightSideNav'
import bg from '../ASSETS/bg.png'
import design from '../ASSETS/design.png'
import HeaderImg from '../COMPONENTS/HeaderImg'
import SelectLevel from '../COMPONENTS/SelectLevel'
const HomeLight = ({setisDarks, isDarks, isDark, setisDark}) => {
  return (
    <div className='flex bg-[var(--white)] w-[100vw]'>
      <LightSideNav isDarks={isDarks} setisDarks={setisDarks}/>
      <div className='right w-full  max-h-screen px-[20px] relative z-[100] overflow-hidden'>
            {/* top navigation */}
            {/* top navigation */}
            <nav className='h-[100px] w-[100vw] md:w-[103.5%] ml-[-3vw] overflow-hidden md:mx-[-1.5vw] bg-[var(--white)] shadow-md flex justify-between pl-[40px] md:pl-[5px] md:justify-center pr-[0px] md:pr-[40px] items-center'>
            {/* logo on mobile */}
            <h2 className='md:hidden block text-[var(--primaryBg)] text-2xl font-bold text-center'>QUEEZ<span className='text-[var(--brownColor)]'>EET</span></h2>
                <form action="" className='h-full w-[80%] hidden md:flex items-center'>
                    <input type="text" placeholder='Search Queezeet' className='bg-transparent w-[50vw] p-[2%] border-slate-300 ml-[20px] border-b-[1px] border-t-[1px] outline-none'/>
                    <button type='submit' className='bg-[var(--primaryBg)] p-[20px] w-[10vw] rounded-r-md text-[var(--white)]' onClick={(e)=>e.preventDefault()}>Search</button>
                </form>
                <div className='hidden md:flex gap-[30px] items-center justify-center w-[20%] cursor-pointer'>
                    <div className='text-[var(--grey2)]' onClick={()=>setisDarks(!isDarks)}><FaMoon size={40}/></div>
                    <div className='text-[var(--secondBg)]'><FaUserCircle size={40}/></div>
                </div>
                <div className='md:hidden block w-[20%]'>
                    <div className='text-[var(--grey2)]'><FaBars size={40}/></div>
                </div>
            </nav>
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
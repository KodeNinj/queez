import React from 'react'
import DarkSideNav from '../COMPONENTS/DarkSideNav'
import { FaBars, FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'

const HomeDark = ({ isDarks,setisDarks}) => {
  return (
    <div className='flex  w-[100vw] bg-[var(--primaryBg)]'>
        {/* side navigation */}
        <DarkSideNav isDarks={isDarks} setisDarks={setisDarks}/>
        <div className='right w-[100vw]  max-h-screen px-[20px]'>
            {/* top navigation */}
            <nav className=' bg-[var(--primaryBg)] h-[100px] w-[100vw] md:w-[103.5%] ml-[-3vw] overflow-hidden md:mx-[-1.5vw]  shadow-md flex justify-between pl-[40px] md:pl-[5px] md:justify-center pr-[0px] md:pr-[40px] items-center'>
                {/* logo on mobile */}
                {/* logo on mobile */}
                <h2 className=' text-[var(--white)] md:hidden block text-2xl font-bold text-center'>QUEEZ<span className='text-[var(--brownColor)]'>EET</span></h2>
                <form action="" className='h-full w-[80%] hidden md:flex items-center text-slate-200'>
                    <input type="text" placeholder='Search Queezeet' className='bg-transparent w-[50vw] p-[2%] border-[var(--btn)] ml-[20px] border-b-[1px] border-t-[1px] outline-none'/>
                    <button type='submit' className='bg-[var(--btn)] p-[20px] w-[10vw] rounded-r-md text-[var(--primaryBg)] font-bold' onClick={(e)=>e.preventDefault()}>Search</button>
                </form>
                <div className='hidden md:flex gap-[30px] items-center justify-center w-[20%] cursor-pointer'>
                    <div className='text-[var(--brownColor)]' onClick={()=>setisDarks(!isDarks)}><FaSun size={40}/></div>
                    <div className='text-[var(--white)]'><FaUserCircle size={40}/></div>
                </div>
                <div className='md:hidden block w-[20%]'>
                    <div className='text-[var(--white)]'><FaBars size={40}/></div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default HomeDark
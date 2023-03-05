import React from 'react'
import bg from '../ASSETS/bg.png'

const HeaderImg = () => {
  return (
    //  main content
    <section className='my-[20px] w-full md:h-[40%] h-[20%] relative rounded-[20px] overflow-hidden'>
        <img src={bg} alt="background" className='h-[100%] w-full object-cover opacity-80'/>
        <div className='absolute  text-center text-[var(--white)] z-50 md:h-[20%] md:top-[40%] w-[80%] mx-[10%] top-0 h-[40%] my-[10%] md:my-0'>
            <h2 className='text-xl md:text-3xl font-bold'>Countries & Capital Quiz</h2>
            <p className='text-lg mt-2'>How vast are you with countries and their capitals?</p>
        </div>
    </section>
  )
}

export default HeaderImg
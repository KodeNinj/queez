import React from 'react'
import baby from '../ASSETS/baby.png'
import teen from '../ASSETS/teen.png'
import boss from '../ASSETS/boss.png'
import RANDOM from '../ASSETS/RANDOM.png'
const SelectLevel = () => {
  return (
    <section className='flex justify-center  gap-[10px] items-center w-full flex-wrap h-[30%] z-100'>
        <img src={baby} alt="baby level" className='md:w-[250px] w-[180px] object-contain mb-[5px] hover:translate-y-[-10px] ease duration-[1s] transition cursor-pointer'/>
        <img src={teen} alt="teen level" className='md:w-[250px] w-[180px] object-contain mb-[5px] hover:translate-y-[-10px] ease duration-[1s] transition cursor-pointer'/>
        <img src={boss} alt="boss level" className='md:w-[250px] w-[180px] object-contain mb-[5px] hover:translate-y-[-10px] ease duration-[1s] transition cursor-pointer'/>
        <img src={RANDOM} alt="RANDOM level" className='md:w-[250px] w-[180px] object-contain mb-[5px] hover:translate-y-[-10px] ease duration-[1s] transition cursor-pointer'/>
    </section>
  )
}

export default SelectLevel
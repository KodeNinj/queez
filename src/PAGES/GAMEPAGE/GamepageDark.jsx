import React, {useState} from 'react'
import DarkSideNav from '../../COMPONENTS/DarkSideNav'
import TopNavDark from '../../COMPONENTS/TopNav'
import { CountriesCapitalEasyObj } from '../../DATA/CountriesCapitalObj'
import { Link } from 'react-router-dom'

const GamepageDark = ({isDarks,setisDarks}) => {
    const [score, setscore] = useState(0)
    const [start, setstart] = useState(0)
    const [end, setend] = useState(1)
    const [count, setcount] = useState(1)
    const [remark, setremark] = useState('hello')
  return (
    <div className='flex  w-[100vw] h-screen overflow-hidden bg-[var(--primaryBg)] relative'>
        {/* side navigation */}
        <DarkSideNav isDarks={isDarks} setisDarks={setisDarks}/>
        <div className='right w-[100vw]  max-h-screen px-[20px] relative z-[100] overflow-hidden'>
          <TopNavDark isDarks={isDarks} setisDarks={setisDarks}/>
          {/* the main game field */}
          <div className='w-full h-[80%] mt-[20px] bg-[var(--secondBg)] rounded-[10px] p-[20px] shadow-lg relative'>
            {/* the score page*/}
            {/* the score page*/}
            <div className='flex h-full w-full flex-col m-0 justify-center items-center text-[var(--white)]'>
              
              <p className='text-xl font-bold'>You score</p>
              <h2 className='text-[100px] leading-none font-bold text-[var(--secondary)]'>{score*10}%</h2>
              <p className='text-xl font-bold text-center mt-[20px]'>{remark}</p>
              <p className='border-[var(--grey)] border-b-2 w-[60%] my-[30px]'></p>
       
              <div className="flex w-full justify-center items-center gap-[20px]">
                <div className="left flex flex-col  gap-[15px] justify-center items-center">
                  <p className='text-xl font-bold text-center'>Total Question</p>
                  <p className='text-3xl font-bold text-center text-[var(--secondary)]'>{count-1}</p>
                  <Link to={'/'} className='p-[20px] bg-[var(--grey)] text-[var(--white)] rounded-md '>Change Level</Link>
                </div>
                <div className="right gap-[15px] flex flex-col justify-center items-center">
                <p className='text-xl font-bold text-center'>Correct Answers</p>
                <h2 className='text-3xl font-bold text-center text-[var(--secondary)]'>{score}</h2>
                  <button className='p-[20px] bg-[var(--deepBlue)] text-[var(--white)] rounded-md' onClick={()=>{
                    setstart(0)
                    setend(1)
                    setcount(1)
                    setscore(0)
                    }}>Try Again</button>
                </div>
              </div>
            </div>
            

            {/* the game page */}
          {CountriesCapitalEasyObj.slice(start,end).map((e)=>{
          
            return(
              <div className='w-full h-full top-0 left-0 absolute bg-[var(--secondBg)] p-[20px] shadow-md rounded-[10px] ' >
                <h3 className='text-2xl font-bold text-center mt-[30px] text-[var(--white)]'>{count}/10: What is the capital of {e.name}?</h3>
                <div className='flex flex-wrap gap-10 justify-center items-center mt-[40px]'>
                  {e.options.map((options)=>{
                   
                    return <button className='w-[40%] border-[1px] border-[var(--white)] hover:bg-[var(--secondBg)] hover:text-[var(--secondary)] text-[var(--white)] transition-all ease duration-1000  p-[15px]' onClick={()=>{
                      // logic for choices
                      if(options === e.answer && end <= 10){
                        setscore(score+1)
                        setstart(start+1)
                        setend(end+1)
                        setcount(count+1)
                      }else if(options !== e.answer && end <= 10){
                        setscore(score)
                        setstart(start+1)
                        setend(end+1)
                        setcount(count+1)
                      }

                      switch(score){
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                          setremark("Your Head is dead. But you can retry though")
                          break;
                        case 5:
                          setremark("You tried dude!")
                          break;
                        case 6:
                        case 7:
                        case 8:
                          setremark("You did well. There is room for improve")
                          break;
                        case 9: 
                        case 10:
                          setremark("Smart Head! You did well")
                          break;
                      }
                       
                      

                    }}>{options}</button>
                  })}
                </div>
                  <div className='absolute bottom-0 left-0 '>
                    <p className='text-center text-xl font-bold leading-0 text-[var(--white)]'>score</p>
                   <p className=' font-bold text-2xl flex  items-center justify-center w-[50px] h-[50px] rounded-full mx-[25px] mb-[40px] m-[10px] bg-[var(--deepBlue)] text-[var(--white)] text-center'>{score}</p>
                
                  </div>
                
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}

export default GamepageDark
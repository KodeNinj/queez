import React, {useState} from 'react'
import { FaBars, FaHamburger, FaMoon, FaUserCircle } from 'react-icons/fa'
import GamepageDark from './GamepageDark'
import GamepageLight from './GamepageLight'
const MainGamePage = (props) => {
  const [isDark, setisDark] = useState(true)
  return (
    // top navigation
    <div>
    {isDark ? <GamepageDark isDarks={isDark} setisDarks={setisDark}/> : <GamepageLight isDarks={isDark} setisDarks={setisDark}/>}
    </div>
  )
}

export default MainGamePage
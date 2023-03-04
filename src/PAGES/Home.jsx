import React, {useState} from 'react'
import HomeLight from './HomeLight'
import HomeDark from './HomeDark'

const Home = (props) => {
  const [isDark, setisDark] = useState(true)
  return (
    <div>
      {isDark ? <HomeDark isDarks={isDark} setisDarks={setisDark}/> : <HomeLight isDarks={isDark} setisDarks={setisDark}/>}
    </div>
    
    
  )
}

export default Home
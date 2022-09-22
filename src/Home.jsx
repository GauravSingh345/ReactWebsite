import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
const Home = () => {
  return (
    <>
     <Common name='Grow Your Business With'
      imgscr = 'https://i.ytimg.com/vi/ZkD59RKLLls/maxresdefault.jpg'
      visit='/service'
      btname='Get Started'/>
    </>
  )
}

export default Home

import React from 'react'
import { NavLink } from 'react-router-dom'
import Common from './Common'
const About = () => {
  return (
    <>
         <Common name='Welcome to About Page'
                imgscr = 'https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png'
                visit='/contact'
                btname='Contact Now'
      />
    </>
  )
}

export default About

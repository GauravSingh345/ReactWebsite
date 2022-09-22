import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div>
       <h2> 404 Error Page</h2>
       <NavLink to="/">Go back</NavLink>
    </div>
  )
}

export default Error

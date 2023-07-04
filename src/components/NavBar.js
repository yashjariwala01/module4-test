import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-black p-4 border-b-2 border-white'>
      <NavLink to={'/'} className='text-white text-xl'>Social Media App <span className='text-xs'>Home</span></NavLink>
    </div>
  )
}

export default NavBar

import React from 'react'
import logo from '../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center bg-green-700'>
        <img 
          src={logo} 
          alt="logo" 
          className='h-20 w-20 border-0 rounded-full m-2 hover:scale-105 transition-transform duration-300'
        />
        <p className='text-2xl sm:text-3xl md:text-4xl text-white font-bold m-2 p-4'>
          AgroNexus
        </p>
        <div>
          <NavLink to='/' className='text-white hover:text-gray-300 p-2'>Home</NavLink>
          <NavLink to='/about' className='text-white hover:text-gray-300 p-2'>About</NavLink>
          <NavLink to='/ml' className='text-white hover:text-gray-300 p-2'>ML</NavLink>
          <NavLink to='/iot' className='text-white hover:text-gray-300 p-2'>IoT</NavLink>
          <NavLink to='/irrigation' className='text-white hover:text-gray-300 p-2'>Irrigation</NavLink>
        </div>
      </div>
    </>
  )
}

export default Header

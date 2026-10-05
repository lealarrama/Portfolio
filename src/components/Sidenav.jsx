import React, { useState } from 'react'
import{
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs';

const Sidenav = () => {
    const [nav, setNav]= useState(false)
    const handleNav = () => {
        setNav(!nav)

    }


  return (
    <div className="site-navigation">
      <AiOutlineMenu size={30} onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden '/>
    {
      nav ? (
          <div className='mobile-navigation fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav}
              href='#main' aria-label='Home'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg
             bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav}
              href='#resume' aria-label='About me'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg
             bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20}/>
              <span className='pl-4'>About me</span>
            </a>
            <a onClick={handleNav}
              href='#project' aria-label='Projects'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg
             bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineProject size={20}/>
              <span className='pl-4'>Projects</span>
            </a>

            <a onClick={handleNav}
              href='#contact' aria-label='Contact'
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg
             bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
      )
      : (
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a
              href='#main' aria-label='Home'
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400
              m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20}/>
            </a>
            <a
              href='#resume' aria-label='About me'
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400
              m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsPerson size={20}/>
            </a>
            <a
              href='#project' aria-label='Projects'
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400
              m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineProject size={20}/>
            </a>
            <a
              href='#contact' aria-label='Contact'
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400
              m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20}/>
            </a>
          </div>
        </div>
      )
    }
    </div>
  );
};

export default Sidenav

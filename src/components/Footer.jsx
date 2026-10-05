import React from 'react'
import Logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <div className='site-footer pb-5 flex justify-center'>
    <div className='flex items-center'>
      <img className='rounded-full w-16 h-16 mr-2' src={Logo} alt='' />
      <h2 className='text-xl text-stone-500'>Built by Leandro Larrama Klam</h2>
    </div>
  </div>
  )
}

export default Footer

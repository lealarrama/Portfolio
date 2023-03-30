import React, { useState } from 'react'
import{AiOutlineDatabase, AiOutlineMenu} from 'react-icons/ai'


const Sidenav = () => {
    const [nav, setNav]= useState(false)
    const handleNav = () => {
        setNav(!nav)
        console.log('andaaa')
    };

	
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
    </div>
  );
};

export default Sidenav

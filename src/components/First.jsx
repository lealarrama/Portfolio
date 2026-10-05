import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaLinkedin} from 'react-icons/fa'




const First = () => {

  return (
    <div id='main' className='relative'>
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=85"
        alt=""
        fetchPriority="high"
      />
        <div className='hero-overlay w-full h-screen absolute top-0 left-0 bg-white/80'>
            <div className='max-w-[700px] px-6 md:pl-20 m-auto h-full flex flex-col justify-center lg:items-start items-center '>
                <h1 tabIndex={-1} className='sm:text-5xl text-4xl  text-center font-bold text-gray-800'>I'm Leandro Larrama Klam</h1>
                <h2 className='flex flex-wrap justify-center lg:justify-start sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                  <TypeAnimation
                    sequence={[
                      'Web Developer', // Types 'One'
                      2000, // Waits 1s
                      'React Developer', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      'Computing Science Student',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                  />
                </h2>
                <p className='pt-4 px-4 lg:px-0 text-lg text-gray-700 text-center lg:text-left'>Based in Dublin. Building practical web applications and seeking my first software development role.</p>
                <div className='hero-socials flex justify-between pt-6 max-w-[200px] w-full'>
                  <a href='https://github.com/lealarrama' aria-label='GitHub profile'>
                    <FaGithub className='cursor-pointer' size={20}/>
                  </a>
                  <a href='https://www.linkedin.com/in/leandro-larrama-klam-743691131/' aria-label='LinkedIn profile'>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                  </a>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default First

import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'




const First = () => {

  return (
    <div id='main'>
      <img className ='w-full h-screen object-cover scale-x-[-1]
      'src='https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/02/iStock-1163542789-945x630.jpg' alt=''>
      </img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center '>
                <h1 className='sm:text-5xl text-4xl  text-center font bold text-gray-800'>I'm Leandro Larrama Klam</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                  <TypeAnimation
                    sequence={[
                      'Web Developer', // Types 'One'
                      2000, // Waits 1s
                      'Coder', // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      'Tech Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft:'5px' }}
                  />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                  <a href='https://github.com/lealarrama'>
                    <FaGithub className='cursor-pointer' size={20}/>
                  </a>
                  
                  <a href='https://www.instagram.com/lea_larramaklam/'>
                    <FaInstagram className='cursor-pointer' size={20}/>
                  </a>
                  
                  <a href='https://www.linkedin.com/in/leandro-larrama-klam-743691131/'>
                    <FaLinkedin className='cursor-pointer' size={20}/>
                  </a>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default First

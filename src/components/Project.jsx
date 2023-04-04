import React from 'react'
import ProjectItem from './PojectItem'
import citasImg from '../assets/img/all.jpg'
import budgetImg from '../assets/img/tailwind.png'
import cryptoImg from '../assets/img/vite.png'
import bookShop from '../assets/img/react.png'


const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa veritatis facere quaerat illum assumenda minus, aspernatur et quas, maxime placeat nisi sapiente commodi, fugiat dicta ipsam pariatur autem? Ut, culpa?
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={citasImg} title='Veterinary Appoiment App'/>
        <ProjectItem img={budgetImg} title='Budget Control App'/>
        <ProjectItem img={cryptoImg} title='Crypto App'/>
        <ProjectItem img={bookShop} title='Veterinary Appoiment App'/>
      </div>
    </div>
  )
}

export default Project
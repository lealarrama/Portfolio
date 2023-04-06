import React from 'react'
import ProjectItem from './PojectItem'
import citasImg from '../assets/img/Appoiment.png'
import budgetImg from '../assets/img/BudgetControl.png'



const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8 text-stone-500 font-normal text-lg'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa veritatis facere quaerat illum assumenda minus, aspernatur et quas, maxime placeat nisi sapiente commodi, fugiat dicta ipsam pariatur autem? Ut, culpa?
      </p>
      <div className='grid sm:grid-cols-2 gap-12 pt-10'>
        <a href='https://appointment-veterinary-clinic.netlify.app/'>
        <ProjectItem img={citasImg} title='Veterinary Appoiment App'/>
        </a>
        <a href='https://budget-control-by-leandro.netlify.app/'>
        <ProjectItem img={budgetImg} title='Budget Control App'/>
        </a>
      </div>
    </div>
  )
}

export default Project

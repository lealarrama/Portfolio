import React from 'react'
import ProjectItem from './PojectItem'
import citasImg from '../assets/img/Appoiment.png'
import budgetImg from '../assets/img/BudgetControl.png'



const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center leading-loose pt-8 text-stone-600 font-normal text-lg text-justify'>
      These projects have been developed with React Js, Vite.js and Tailwind css. Both projects are working with Local Storage.
      Veterinary Patient Control App allows you to input important information and follow up all patients registred in the clinic.</p>
      <p className='text-center leading-loose pb-8 text-stone-600 font-normal text-lg text-justify'>
        Expense Planner App permit to track your spendings by limiting an available budget and adding outputs per categories in order to control the expenses.</p>       
      
      <div className='grid sm:grid-cols-2 gap-12 pt-10'>
        <a href='https://appointment-veterinary-clinic.netlify.app/'>
        <ProjectItem img={citasImg} title='Veterinary Patient Control App'/>
        </a>
        <a href='https://budget-control-by-leandro.netlify.app/'>
        <ProjectItem img={budgetImg} title='Expense Planner App'/>
        </a>
      </div>
    </div>
  )
}

export default Project

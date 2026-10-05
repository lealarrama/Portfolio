import React from 'react'
import ProjectItem from './PojectItem'
import citasImg from '../assets/img/Appoiment.png'
import budgetImg from '../assets/img/BudgetControl.png'

const projects = [
  {
    title: 'Veterinary Patient Manager',
    type: 'Personal learning project',
    img: citasImg,
    technologies: 'React · Vite · Tailwind CSS · localStorage',
    description: 'A patient record organiser that brings pet, owner and appointment details together in a simple interface.',
    features: 'Add, edit and delete records containing the pet’s name, owner, contact email, appointment date and symptoms. Required-field validation helps prevent incomplete entries.',
    contribution: 'Built the React interface, connected the patient form to the record list and implemented editing, deletion and browser storage.',
    learning: 'Practised sharing state between components, reusing a form for creating and editing records, and persisting data with React effects and localStorage.',
    limitation: 'A browser-based learning app: records stay in the same browser and are not shared across devices.',
    demo: 'https://appointment-veterinary-clinic.netlify.app/',
    repository: 'https://github.com/lealarrama/citas_veternaria_react_-vite',
  },
  {
    title: 'Expense Planner',
    type: 'Personal learning project',
    img: budgetImg,
    technologies: 'React · Vite · CSS · localStorage',
    description: 'A budget tracker that helps users see how much they have spent and how much remains available.',
    features: 'Set a budget, add and edit expenses, remove entries and filter spending by category. A circular indicator displays the proportion of the budget spent.',
    contribution: 'Built the budgeting interface, expense form and category filters, connecting them to React state and browser storage.',
    learning: 'Practised managing related state, calculating totals from expense data and coordinating modal forms with a filterable list.',
    limitation: 'Budget and expense data are saved in the same browser using localStorage.',
    demo: 'https://budget-control-by-leandro.netlify.app/',
    repository: 'https://github.com/lealarrama/Control-de-Gastos',
  },

]

const Project = () => (
  <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
    <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
    <p className="leading-relaxed pb-8 text-stone-600 text-lg text-left">
      Two personal learning projects built with React. Each project shows the problem it addresses, my involvement and the development skills I practised.
    </p>
    <div className="grid sm:grid-cols-2 gap-12 pt-10">
      {projects.map(project => <ProjectItem key={project.title} {...project} />)}
    </div>
  </div>
)

export default Project

import React from 'react'
import Photo from '../assets/img/leandro.jpg'
import Diploma from '../assets/img/Diploma.png'

const Resume = () => {
  return (
    <div id='resume' className='m-auto md:pl-20 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e] py-10'>About me </h1>
  
        <div className='sm:flex'>
            <img className='rounded-full w-32 h-32 mx-auto  sm: w-48 h-48'  src ={Photo} alt=''/>
            <p className='text-justify leading-loose pt-5 text-stone-600 text-lg mx-5 sm:px-10 sm:pt-0' > 
                I am a Jr.Front End Developer currently living and studying in Dublin looking for opportunities and new challenges.  
                From my personal projects and learning experiences I have been familiarized with the following programming languages: Node.js, Javascript, Express, Html, Css, MySql, 
                Api's, React.js, Vite.js and Tailwind Css, also I have knowledge in Git, Scrum, Trello, Slack. 
                Though I am an entry-level applicant, as a highly motivated, progress-focused, and collaborative, I know I have much to learn and to assemble to the company. I'm looking for an opportunity that will let me build a solid professional foundation.
            </p>
         </div> 
        <div>
        <div className='pt-10'>
            <p className='text-center leading-loose py-10 text-stone-600 text-lg mx-5' > 
              Web Full Stack Certificate - Front End focused in visual, layout and interections. 
              Back End focused in the logic to conect databases and to creat any functionalities that a website might need.    
            </p>
            <img className='mx-auto w-1/2 sm:w-1/4'   src ={Diploma} alt=''/>
         </div> 

        </div>
      
    </div>
  )
}

export default Resume

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
                I am currently an exchange English student in Dublin with a background in Coding (Programming) looking for an opportunity and new challenges in the Web Development (IT, Tech) sector.  
                From my personal projects and learning experiences I have been familiarized with following coding (programming) languages: Node.js, Javascript, Express, Html, Css, Javascript front, MySql, 
                Api, Sequelize, React.js, Git, Scrum, Trello, Slack. 
                As a highly motivated, progress-focused, and collaborative individual with good communication/interpersonal and adaptability/problem-solving skills. Though I am an entry-level applicant, I know I have much to learn and to assemble to the company. I'm looking for an opportunity that will let me build a solid professional foundation.
                I am aware that you will receive many applications for the position, but I would very much appreciate the opportunity to demonstrate my capabilities to you in person. Thank you for taking the time to review my application, and for your consideration. 
                I look forward to hearing from you.
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

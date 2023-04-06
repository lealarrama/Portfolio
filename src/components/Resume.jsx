import React from 'react'
import Photo from '../assets/img/leandro.jpg'

const Resume = () => {
  return (
    <div id='resume' className='max-v-[1040px] w-auto md:pl-20 p-4 py-16 ' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-10'>About me </h1>
      <div className="">
        <div className="container md:flex">
          <img  className =" p-8 m-10 mt-0 rounded-full ml-0" src ={Photo} alt=''/>
            <p className='text-lg font-normal text-justify pt-8 m-2 my-2 text-stone-500'>
                Dear recruiter (To whom it may concern), 
                I am currently an exchange English student in Dublin with a background in Coding (Programming) looking for an opportunity and new challenges in the Web Development (IT, Tech) sector.  
                From my personal projects and learning experiences I have been familiarized with following coding (programming) languages: Node.js, Javascript, Express, Html, Css, Javascript front, MySql, 
                Api, Sequelize, React.js, Git, Scrum, Trello, Slack. 
                As a highly motivated, progress-focused, and collaborative individual with good communication/interpersonal and adaptability/problem-solving skills. Though I am an entry-level applicant, I know I have much to learn and to assemble to the company. I'm looking for an opportunity that will let me build a solid professional foundation.
                I am aware that you will receive many applications for the position, but I would very much appreciate the opportunity to demonstrate my capabilities to you in person. Thank you for taking the time to review my application, and for your consideration. 
                I look forward to hearing from you.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Resume

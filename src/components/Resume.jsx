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
            👋 Hello! I'm passionate about app development for a simple reason: our mobile devices have become integral parts of our daily lives. Think about it - most people reach for their phones first thing in the morning and last thing before bed. Imagine a day without them; it wouldn't be as pleasant or efficient, right? That's why I'm driven to create apps that solve problems and make life easier for users.
As a Jr. Front End Developer currently based in Dublin, I'm eager to take on new challenges and opportunities. Through my personal projects and learning experiences, I've acquired proficiency in various programming languages such as JavaScript, HTML, CSS, and some MySQL, Node.js, and Express.js. Additionally, I've explored frameworks like React.js and Vite.js. Moreover, I leverage tools like Tailwind CSS for streamlined styling.
Beyond technical skills, I bring a collaborative and progress-focused mindset to every project. I'm well-versed in Agile methodologies such as Scrum, and I thrive in fast-paced, team-oriented environments. My familiarity with version control systems like Git, as well as project management tools like Trello and communication platforms like Slack, enables me to contribute effectively to cross-functional teams.
I pride myself on being a reliable and responsible individual, with a strong sense of organization. I have a genuine passion for learning, and I'm quick to grasp new concepts and technologies. I thrive in environments that foster continuous growth and development, and I'm always eager to expand my skill set and take on new challenges.
While I'm an entry-level applicant, I'm highly motivated and dedicated to continuous learning and growth. I'm seeking an opportunity that will allow me to further develop my skills and build a solid professional foundation. If you're looking for a passionate, proactive, and dependable team member to join your organization, I'd love to connect and discuss how I can contribute to your team's success.

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

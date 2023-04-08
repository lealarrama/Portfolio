import React from 'react'
import WorkItem from "./WorkItem"
import { BsDatabaseDown } from 'react-icons/bs';


const data = [
    {
        year:2021,
        title: 'Project E-commerce Book Shop',
        duration: '6 months',
        details:'Development of an e-commerce book shop with other developers using tools such as Github, Slack and Trello. In this project all information are kept in one data base and include many routes to navegate. Adm users are able to add, edit and delete products, it is also possible to register new users and a shopping cart was created as a functionality.'
           
    },{
        year:2022,
        title: 'Own Projects',
        duration: 'Present',
        details:'I have been dedicating myself to develop personal projects using Javascript, Reactjs, Vite and Taillwind to keep improving my knowledge. '
    }
]

const Work = () => {
  return (
    <div id='work' className='max-v-[1040px] w-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]' >Work</h1>
        {data.map((item, idx)=>(
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} 
            />
        ))}
    </div>
  );
};

export default Work

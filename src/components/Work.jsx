import React from 'react'
import WorkItem from "./WorkItem"


const data = [
    {
        year:2022,
        title: 'Own Projects',
        duration: '3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus libero aut eaque, ab esse enim animi accusamus illum beatae,reprehenderit ratione nesciunt omnis repellat reiciendis unde ex qui at quisquam.'
    },
    {
        year:2022,
        title: 'Own Projects',
        duration: '3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus libero aut eaque, ab esse enim animi accusamus illum beatae,reprehenderit ratione nesciunt omnis repellat reiciendis unde ex qui at quisquam.'
    },
    { 
        year:2022,
        title: 'Own Projects',
        duration: '3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus libero aut eaque, ab esse enim animi accusamus illum beatae,reprehenderit ratione nesciunt omnis repellat reiciendis unde ex qui at quisquam.'
    },
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

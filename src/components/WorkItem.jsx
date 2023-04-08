import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
            <li className='mb-10 ml-4 '>
                <div className='absolute w-3 h- bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>.
                    <p className=' flex flex-wrap gap-4 flex-row items-cent justify-start text-xs md:text-sm'>
                        <span className='inline-block px2 py-1 font-semibold p-2 text-white bg-[#001b5e] rounded-md'>{year}</span>
                        <span className='text-xl font-semibold text-[#001B5e]'>{title}</span>
                        <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>  
                    </p>
                    <p className='my-2 text-lg font-normal leading-loose text-stone-600 text-justify sm:pr-10'>{details}</p>
            </li>
        </ol>
        )
    }


export default WorkItem

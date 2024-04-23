import React from 'react'

import html from "../assets/experience/html.png"
import css from "../assets/experience/css.png"
import js from "../assets/experience/javascript.png"
import reactjs from "../assets/experience/react.png"
import express from "../assets/experience/node.png"
import tailwind from "../assets/experience/tailwind.png"
import github from "../assets/experience/github.png"

const Experience = () => {
    const technologies = [
        {
            name: 'HTML',
            img: html,
            style: "shadow-orange-500"
        },
        {
            name: 'CSS',
            img: css,
            style: "shadow-blue-500"
        },
        {
            name: 'JavaScript',
            img: js,
            style: "shadow-blue-500"
        },
        {
            name: 'React.js',
            img: reactjs,
            style: "shadow-blue-600"
        },
        {
            name: 'Express js',
            img: express,
            style: "shadow-green-400"
        },
        {
            name: 'Tailwind CSS',
            img: tailwind,
            style: "shadow-sky-400"
        },
        {   
            name: 'GitHub',
            img: github,
            style: "shadow-gray-400"
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className=' py-6'>These are the technologies I've worked with</p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {technologies.map((tech, index) => (
                    <div key={index} className={`shadow-md hover:scale-150 duration-500 py-2 rounded-lg ${tech.style}`}>
                        <img src={tech.img} alt="" className=' w-20  mx-auto'/>
                        <p className=' mt-4'>{tech.name}</p>
                    </div>
                ))}
            
            </div>
          
        </div>
    </div>
  )
}

export default Experience
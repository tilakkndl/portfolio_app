import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I am a Full Stack Developer with experience in building web applications using React, Node.js, Express, and MongoDB. I am learning and building projects to improve my skills. 
            </p>
            <br />
            <p className='text-xl'>
            Currently, I'm focusing on deepening my understanding of cloud technologies and DevOps practices. I'm also passionate about open-source contributions and have been actively participating in various projects. Check out my GitHub profile to see my recent work.
            </p>
        </div>
    </div>
  )
}

export default About
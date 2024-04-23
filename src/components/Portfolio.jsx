import React from 'react'
import pic1 from "../assets/portfolio/pic1.jpg"
import pic2 from "../assets/portfolio/pic2.jpg"
import pic3 from "../assets/portfolio/pic3.jpg"
import pic4 from "../assets/portfolio/pic4.jpg"
import pic5 from "../assets/portfolio/pic5.jpg"
import pic6 from "../assets/portfolio/pic6.jpg"

const Portfolio = () => {
    const portfolios = [  
        {
            id: 1,
            thumnailSrc: pic1,

    }  ,
    {
        id: 2,
        thumnailSrc: pic2,  },
    { id: 3,
        thumnailSrc: pic3,  },
    { id: 4,
        thumnailSrc: pic4,  },
    { id: 5,
        thumnailSrc: pic5,  },
    { id: 6,
        thumnailSrc: pic6,  },
]
  return (
   <>
   <div name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfoli</p>
            <p className='py-6'>Check out Some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0'>


         
                {portfolios.map((portfolio)=>(
      <div key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg'>
           <img src={portfolio.thumnailSrc} alt="" className='rounded-md duration-200 hover:scale-105 w-300'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button  className='w-1/2 px-6 m-4 duration-200 hover:scale-105'>Code</button>
        
            </div>
            </div>
                ))}
    </div>
    </div>
   </div>
   
   </>
  )
}

export default Portfolio
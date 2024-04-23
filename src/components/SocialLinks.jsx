import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';



const SocialLinks = () => {
    const links = [
        {id: 1,
        child: (<>LinkedIn <FaLinkedin size={30}/></>),
        href: 'https://www.linkedin.com/in/tilak-kandel-89a355218/',
        style: "rounded-tr-md"
        },
        {id: 2,
            child: (<>Github <FaGithub size={30}/></>),
            href: 'https://www.github.com/tilakkndl/',
           
            },
            {id: 3,
                child: (<>Mail <HiOutlineMail size={30}/></>),
                href: 'mailto:tilakkndl2002@gmail.com',
             
          
                },
                {id: 4,
                    child: (<>Resume <BsFillPersonFill size={30}/></>),
                    href: '/tilak_resume.pdf',
                    style: "rounded-br-md",
                    download: true,
                    }
    ]
    return (

        <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
            <ul>
               
                {links.map(({href, id, download, style, child}) => {
                    return (
                        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px]  duration-300 ${style}`}>
                            <a href={href} download={download} target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                                {child}
                            </a>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    );
};

export default SocialLinks;
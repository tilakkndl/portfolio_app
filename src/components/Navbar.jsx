import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import {Link} from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);
    const links = ['home', 'about', 'portfolio', 'experience', 'contact']
    return (
       <>
       <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="text-5xl font-signature">Tilak</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map((link, index) => {
                return (
                    <li key={index} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' >
                        <Link to={link} smooth={true} duration={500}>{link}</Link>
                    </li>
                )
            })}
        </ul>

        <div onClick={()=>setNav(!nav) }className="cursor-pointer pr-4 z-10 to-gray-500 md:hidden">
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav &&

        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {/* <li className='px-4 cursor-pointer capitalize py-6' >home</li> */}
            {links.map((link, index) => {
                return (
                    <li key={index} className='px-4 cursor-pointer capitalize text-4xl py-6 ' >
                        <Link to={link} smooth={true} duration={500} onClick={()=>setNav(!nav)}>{link}</Link>

                        </li>
                )
            })}
        </ul>
}

       </div>
       </>
    );
}

export default Navbar;
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handelNav = () => {
        setNav(!nav)
    }
    return (
        <div class='w-full min-h-[50px] flex justify-center items-center absolute z-10 text-[var(--text-primary)]'>
            <div className=''>
                <ul class='text-1xl space-x-6 hidden sm:flex px-6 '>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                    <li>
                        <a href="/">Blogs</a>
                    </li>
                    <li>
                        <a href="/">Events</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            {/* {Hamburger Icon} */}
            <div onClick={handelNav} class='sm:hidden z-10'>
                <FaBars size={30} className='ml-96 cursor-pointer' />
            </div>
            {/*Mobile Menu  */}
            <div 
            onClick={handelNav} className={nav ? 'text-4xl overflow-y-hidden md:hidden ease-in duration-300 absolute w-full text-gray-300 left-0 top-0 h-screen bg-[var(--primary-dark)] px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul class='h-full w-full mt-2 space-y-9 '>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Pricing</a>
                    </li>
                    <li>
                        <a href="/">Pages</a>
                    </li>
                    <li>
                        <a href="/">Blogs</a>
                    </li>
                    <li>
                        <a href="/">Events</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
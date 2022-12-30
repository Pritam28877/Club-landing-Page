import React from 'react'
import {FaBars} from 'react-icons/fa'
const NavBar = () => {
  return (
    <div class='w-full min-h-[50px] flex  absolute justify-between  z-10 text-[var(--text-primary)]'>
        <ul class=' space-x-4 hidden sm:flex px-6 '>
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
        {/* {Hamburger Icon} */}
        <div>
            <FaBars />
        </div>
        {/*Mobile Menu  */}
        <div>
        <ul class='space-y-3.5'>
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
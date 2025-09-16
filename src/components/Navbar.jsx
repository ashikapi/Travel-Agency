import React from 'react'
import logo from '../images/Travel_Agency_logo.png' // company logo
import Heros from '../pages/Heros'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // hamburger menu icons

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='w-screen h-16 flex justify-center items-center p-5 bg-gradient-to-r from-yellow-50 to-orange-200 text-black fixed top-0 z-50'>
            <div className='lg:flex lg:justify-between flex justify-evenly items-center lg:w-4/5 font-sutonny lg:gap-0 gap-40'>
                {/* Company logo */}
                <div>
                    <a href="#hero">
                        <img className='lg:w-52 w-36' src={logo} alt="" />
                    </a>
                </div>
                {/* Desktop Menu */}
                <div className='md:flex md:justify-center md:items-center hidden'>
                    <ul className='hidden md:flex md:gap-16 md:text-lg md:font-bold'>
                        <li className='hover:text-orange-600'><a href="#hero"> হোম </a></li>
                        <li className='hover:text-orange-600'><a href="#neog"> নিয়োগ </a></li>
                        <li className='hover:text-orange-600'><a href="#amadersomporke">আমাদের সম্পর্কে </a></li>
                        <li className='hover:text-orange-600'><a href="#">যোগাযোগ </a></li>
                    </ul>
                </div>
                {/* Desktop টিকেট কিনুন button */}
                <div className='md:flex md:justify-center md:items-center hidden'>
                    <button className='hidden lg:flex justify-evenly items-center p-2 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-md text-md text-white font-extrabold'><section>টিকেট কিনুন</section></button>
                </div>
                {/* Mobile Menu sidebar and close */}
                <div className='md:hidden text-2xl text-orange-600 mr-1 ml-1' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div>
                    <ul className='md:hidden flex flex-col bg-gradient-to-br from-cyan-400 to-cyan-950 rounded-lg text-white font-semibold text-base mt-56 mr-48 list-none p-6 gap-3'>
                        <li> <a onClick={() => setMenuOpen(false)} href="#hero"> হোম </a></li>
                        <li> <a onClick={() => setMenuOpen(false)} href="#neog"> নিয়োগ </a></li>
                        <li> <a onClick={() => setMenuOpen(false)} href="#amadersomporke">আমাদের সম্পর্কে </a></li>
                        <li> <a onClick={() => setMenuOpen(false)} href="#">যোগাযোগ </a></li>
                        {/* Mobile Menu টিকেট কিনুন button */}
                        <li>
                            <a
                                onClick={() => setMenuOpen(false)}
                                href=""></a>
                            <button className='px-32 py-1 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-3xl text-sm text-center text-white font-extrabold'>টিকেট কিনুন</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[-8%] py-8 flex items-center justify-center z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : '' }`}>
        <div className='flex items-center gap-8'>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} hover:bg-opacity-100 transition-all duration-500 ease-in-out hover:shadow-lg animate-scale`}>
                <li>
                    <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#top'>Home</a>
                </li>
                <li>
                    <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#about'>About me</a>
                </li>
                <li>
                    <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#projects'>Services</a>
                </li>
                <li>
                    <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#work'>My Work</a>
                </li>
                <li>
                    <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#contact'>Contact me</a>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='Moon' className='w-7 hover:animate-pulse' />
                </button>
                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full font-ovo hover:bg-gray-100 hover:border-gray-700 transition-all duration-300 hover:shadow-md hover:animate-scale'>Contact 
                    <Image src={assets.arrow_icon} alt='' className='w-3' /></a>
                
                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='Menu' className='w-7 hover:animate-pulse' />
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='md:hidden flex-col gap-8 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute top-4 right-4 mb-8' onClick={closeMenu}>
                <Image src={assets.close_black} alt='Close' className='w-5 cursor-pointer'/>
            </div>
            <li className='md:hidden py-2' onClick={closeMenu}>
                <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#top'>Home</a>
            </li>
            <li className='md:hidden py-2' onClick={closeMenu}>
                <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#about'>About me</a>
            </li>
            <li className='md:hidden py-2' onClick={closeMenu}>
                <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#projects'>Services</a>
            </li>
            <li className='md:hidden py-2' onClick={closeMenu}>
                <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#work'>My Work</a>
            </li>
            <li className='md:hidden py-2' onClick={closeMenu}>
                <a className='font-ovo hover:text-green-600 transition-colors duration-300 hover:animate-scale' href='#contact'>Contact me</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
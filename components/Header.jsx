import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-32 px-4'>
        <div className='flex justify-center'>
            <Image src={assets.portfolio_img} alt='Profile' className='w-32 rounded-full mx-auto' />
        </div>
        <h3 className='flex items-end gap-2 text-xl font-ovo md:text-2xl mb-3'>
            Hello, I'm Raymundo <Image src={assets.hand_icon} alt='Profile' className='w-6' />
        </h3>
        <h1 className='text-3xl sm:text-6xl font-ovo lg:text-[66px]'>
            Full-Stack Web Developer based in México
        </h1>
        <p className='max-w-2xl mx-auto font-ovo text-gray-600 leading-relaxed'>
            I am a passionate Full-Stack Web Developer with expertise in modern technologies like React, Node.js, and Python. 
            With a strong foundation in both frontend and backend development, I create dynamic, responsive web applications 
            that deliver exceptional user experiences. My experience spans from building interactive user interfaces to 
            developing robust server-side solutions and working with databases like MySQL and MongoDB.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 hover:animate-pulse transition-colors duration-300'>
                Contact Me<Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
            </a>
            <a href="/CV_Raymundo_Perez_Portfolio.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 hover:animate-bounce transition-colors duration-300'>
                My Resume<Image src={assets.download_icon} alt='Download' className='w-4' />
            </a>
        </div>
    </div>
  )
}

export default Header
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-32 px-4'>
        <motion.div 
        initial={{ scale: 0,}}
        whileInView={{ scale: 1,}}
        transition={{ duration: 0.8, type: "spring", bounce: 0.25, stiffness: 100 }}
        className='flex justify-center'>
            <Image src={assets.portfolio_img} alt='Profile' className='w-32 rounded-full mx-auto' />
        </motion.div>
        <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, }}
         className='flex items-end gap-2 text-xl font-ovo md:text-2xl mb-3'>
            Hello, I'm Raymundo <Image src={assets.hand_icon} alt='Profile' className='w-6' />
        </motion.h3>
        <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, }}
        className='text-3xl sm:text-6xl font-ovo lg:text-[66px]'>
            Full-Stack Web Developer based in México
        </motion.h1>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, }}
        className='mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl font-ovo mx-auto text-sm sm:text-base md:text-lg leading-relaxed'>
            I am a passionate Full-Stack Web Developer with expertise in modern technologies like React, Node.js, and Python.
            With a strong foundation in both frontend and backend development, I create dynamic, responsive web applications
            that deliver exceptional user experiences. My experience spans from building interactive user interfaces to
            developing robust server-side solutions and working with databases like MySQL and MongoDB.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, }}
            href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 hover:animate-pulse transition-colors duration-300 dark:bg-transparent'>
                Contact Me<Image src={assets.right_arrow_white} alt='Arrow' className='w-4' />
            </motion.a>
            <motion.a 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, }}
            href="/CV_Raymundo_Perez_Portfolio.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 hover:animate-bounce transition-colors duration-300 bg-white  dark:text-black'>
                My Resume<Image src={assets.download_icon} alt='Download' className='w-4' />
            </motion.a>
        </div>
    </div>
  )
}

export default Header
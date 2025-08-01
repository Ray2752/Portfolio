import React from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div 
    id='services' 
    className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-4 sm:mt-6 md:mt-8 lg:mt-12 mx-auto max-w-7xl'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    >
          <motion.h4 
          className='text-center mb-4 text-base sm:text-lg md:text-xl font-ovo'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          >
            WHAT I OFFER
        </motion.h4>
        <motion.h2 
        className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
            My Services
        </motion.h2>
        <motion.p 
        className='text-center mb-8 text-base sm:text-lg md:text-xl font-ovo max-w-4xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        >
            I specialize in full-stack web development, creating modern and responsive applications using cutting-edge technologies. 
            From frontend user interfaces with React and Next.js to robust backend solutions with Node.js and database management, 
            I deliver complete digital solutions tailored to your business needs.
        </motion.p>
        <motion.div 
        className='grid grid-cols-auto gap-6 my-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        >
            {serviceData.map(({icon, title, description, link}, index) => (
              <motion.div 
              key={index} 
              className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover dark:hover:bg-lightHover/30 transition-shadow duration-500'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <Image src={icon} alt='' className='w-10' />
                </motion.div>
                <motion.h3 
                className='text-lg my-4 text-gray-700 dark:text-white'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                >
                  {title}
                </motion.h3>
                <motion.p 
                className='text-sm text-gray-600 leading-5 dark:text-white'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                >
                  {description}
                </motion.p>
                {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-3' /></a> */}
              </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services
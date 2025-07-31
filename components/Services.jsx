import React from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'
import { assets } from '@/assets/assets'

const Services = () => {
  return (
    <div id='services' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-4 sm:mt-6 md:mt-8 lg:mt-12 mx-auto max-w-7xl'>
          <h4 className='text-center mb-4 text-base sm:text-lg md:text-xl font-ovo'>
            WHAT I OFFER
        </h4>
        <h2 className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'>
            My Services
        </h2>
        <p className='text-center mb-8 text-base sm:text-lg md:text-xl font-ovo max-w-4xl mx-auto'>
            I specialize in full-stack web development, creating modern and responsive applications using cutting-edge technologies. 
            From frontend user interfaces with React and Next.js to robust backend solutions with Node.js and database management, 
            I deliver complete digital solutions tailored to your business needs.
        </p>
        <div className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
              <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
               hover:bg-lightHover dark:hover:bg-lightHover/30 transition-shadow duration-500'>
                <Image src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-3' /></a> */}
              </div>
            ))}
        </div>
    </div>
  )
}

export default Services
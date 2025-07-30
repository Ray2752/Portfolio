import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-auto max-w-7xl'>
        <h4 className='text-center mb-2 text-base sm:text-lg md:text-xl font-ovo'>
            Introduction
        </h4>
        <h2 className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'>
            About Me
        </h2>
        <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 my-8 sm:my-12 md:my-16 lg:my-20'>
            {/* <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt="User" className='rounded-3xl w-full' /> 
            </div> */}
            <div className='flex-1 text-center w-full'>
                <p className='mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl font-ovo mx-auto text-sm sm:text-base md:text-lg leading-relaxed'>I am a passionate web developer with a focus on creating dynamic and responsive web applications.
                 My journey in web development began with a curiosity for how websites work, and it has evolved into a full-fledged career. I enjoy tackling 
                 complex problems and finding innovative solutions to enhance user experiences.</p>
                 <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto'>
                   {infoList.map(({icon, itemDark, title, description}, index) => (
                     <li key={index} className='border border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black'>
                        <Image 
                            src={icon} 
                            alt={title} 
                            className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 mt-2 sm:mt-3 object-contain mx-auto'
                            quality={95}
                        />
                        <h3 className='my-3 sm:my-4 md:my-5 font-semibold text-gray-700 text-sm sm:text-base md:text-lg'>{title}</h3>
                        <p className='text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed'>{description}</p>
                     </li>
                   ))}
                 </ul>
                 <div className='mt-6 sm:mt-8 md:mt-10'>
                     <h4 className='mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-ovo'>
                        🛠️ Tools I use
                     </h4>
                     <div className='overflow-hidden relative w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto py-3 sm:py-4 md:py-6'>
                         <div className='flex items-center gap-6 animate-marquee whitespace-nowrap'>
                            {/* Primera serie */}
                            {toolsData.map((tool, index) => (
                              <div key={`first-${index}`} className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black flex-shrink-0'>
                                <Image src={tool} alt={`Tool ${index}`} className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
                              </div>
                            ))}
                            {/* Segunda serie */}
                            {toolsData.map((tool, index) => (
                              <div key={`second-${index}`} className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black flex-shrink-0'>
                                <Image src={tool} alt={`Tool ${index}`} className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
                              </div>
                            ))}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About
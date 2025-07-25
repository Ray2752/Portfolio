import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            Introduction
        </h4>
        <h2 className='text-center mb-6 text-5xl font-ovo'>
            About Me
        </h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            {/* <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt="User" className='rounded-3xl w-full' /> 
            </div> */}
            <div className='flex-1 text-center'>
                <p className='mb-10 max-w-2xl font-ovo mx-auto'>I am a passionate web developer with a focus on creating dynamic and responsive web applications.
                 My journey in web development began with a curiosity for how websites work, and it has evolved into a full-fledged career. I enjoy tackling 
                 complex problems and finding innovative solutions to enhance user experiences.</p>
                 <ul className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                   {infoList.map(({icon, itemDark, title, description}, index) => (
                     <li key={index} className='border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black'>
                        <Image 
                            src={icon} 
                            alt={title} 
                            className='w-7 h-7 mt-3 object-contain mx-auto'
                            quality={95}
                        />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                     </li>
                   ))}
                 </ul>
                 <div className='mt-10'>
                     <h4 className='mb-4 text-xl font-semibold text-gray-800 font-ovo'>
                        🛠️ Tools I use
                     </h4>
                     <div className='overflow-hidden relative w-full max-w-4xl mx-auto py-6'>
                         <ul className='flex items-center gap-6 animate-marquee whitespace-nowrap'>
                            {toolsData.map((tool, index) => (
                              <li key={index} className='flex items-center justify-center w-16 h-16 border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black flex-shrink-0'>
                                <Image src={tool} alt={`Tool ${index}`} className='w-8 h-8' />
                              </li>
                            ))}
                            {/* Duplicamos los elementos para crear el efecto infinito */}
                            {toolsData.map((tool, index) => (
                              <li key={`duplicate-${index}`} className='flex items-center justify-center w-16 h-16 border border-gray-400 rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-black flex-shrink-0'>
                                <Image src={tool} alt={`Tool ${index}`} className='w-8 h-8' />
                              </li>
                            ))}
                         </ul>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About
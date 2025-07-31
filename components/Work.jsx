import { assets, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (project) => {
    setSelectedImage(project)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div id='work' className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-auto max-w-7xl'>
        <h4 className='text-center mb-2 text-base sm:text-lg md:text-xl font-ovo'>
            MY PORTFOLIO
        </h4>
        <h2 className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'>
            My lastest work
        </h2>
        <p className='text-center mb-8 text-base sm:text-lg md:text-xl font-ovo max-w-4xl mx-auto'>
            Welcome to my portfolio! Here you'll find a collection of innovative projects that showcase my passion for creating 
            meaningful digital solutions. Each project represents my commitment to building exceptional user experiences 
            with modern technologies, from full-stack web applications to AI-powered platforms and mobile solutions.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-10 gap-6'>
            {workData.map((project, index) => (
                <div key={index}
                className='bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group h-64 md:h-72 lg:h-80 overflow-hidden'
                 style={{ backgroundImage: `url(${project.bgImage})` }}
                 onClick={() => openModal(project)}>
                    <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300'></div>
                    <div className='bg-white w-11/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-300 group-hover:bottom-6 shadow-lg'>
                    <div className='flex-1'>
                        <h2 className='font-semibold text-gray-800 text-sm md:text-base truncate'>{project.title}</h2>
                        <p className='text-gray-700 text-xs md:text-sm mt-1 line-clamp-2'>{project.description}</p>
                    </div>
                    <div className='ml-3 flex-shrink-0'>
                        <Image src={assets.send_icon} alt='Send Icon' className='w-4 md:w-5 opacity-70 group-hover:opacity-100 transition-opacity' />    
                     </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal for full image */}
        {selectedImage && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4'
               onClick={closeModal}>
            <div className='relative w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl max-h-[95vh] h-auto'
                 onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={closeModal}
                className='absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition-all z-20'>
                <Image src={assets.close_white} alt='Close' className='w-4 h-4' />
              </button>
              <div className='relative w-full h-auto'>
                <Image 
                  src={selectedImage.bgImage} 
                  alt={selectedImage.title}
                  width={selectedImage.title === 'BookEater' ? 400 : 1200}
                  height={selectedImage.title === 'BookEater' ? 800 : 800}
                  className='w-full h-auto object-contain rounded-lg max-h-[80vh] sm:max-h-[85vh]'
                />
                {/* Información del proyecto debajo de la imagen en móvil, overlay en desktop */}
                <div className='block sm:hidden bg-gray-900 p-4 rounded-b-lg'>
                  <h3 className='text-white text-lg font-bold mb-2'>{selectedImage.title}</h3>
                  <p className='text-gray-200 text-sm'>{selectedImage.description}</p>
                </div>
                <div className='hidden sm:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 rounded-b-lg'>
                  <h3 className='text-white text-lg md:text-xl font-bold mb-1'>{selectedImage.title}</h3>
                  <p className='text-gray-200 text-sm md:text-base'>{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
         {/* <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show More <Image src={assets.right_arrow_bold} alt='Arrow' className='w-4' />
    </a> */}
    </div>
   
  )
}

export default Work
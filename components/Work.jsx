import { assets, workData } from '@/assets/assets'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project) => {
    setSelectedImage(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedImage && selectedImage.gallery) {
      const totalImages = selectedImage.gallery.length + 1 
      setCurrentImageIndex((prev) => (prev + 1) % totalImages)
    }
  }

  const prevImage = () => {
    if (selectedImage && selectedImage.gallery) {
      const totalImages = selectedImage.gallery.length + 1
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
    }
  }

  const getCurrentImageSrc = () => {
    if (!selectedImage || !selectedImage.gallery) return selectedImage?.bgImage
    if (currentImageIndex === 0) return selectedImage.bgImage
    return selectedImage.gallery[currentImageIndex - 1]
  }

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      
      if (e.key === 'Escape') {
        closeModal()
      } else if (selectedImage.title === 'BookEater' && selectedImage.gallery) {
        if (e.key === 'ArrowRight') {
          nextImage()
        } else if (e.key === 'ArrowLeft') {
          prevImage()
        }
      }
    }

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [selectedImage, currentImageIndex])

  return (
    <motion.div 
    id='work' 
    className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 md:py-10 scroll-mt-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-auto max-w-7xl'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    >
        <motion.h4 
        className='text-center mb-2 text-base sm:text-lg md:text-xl font-ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
            MY PORTFOLIO
        </motion.h4>
        <motion.h2 
        className='text-center mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        >
            My latest work
        </motion.h2>
        <motion.p 
        className='text-center mb-8 text-base sm:text-lg md:text-xl font-ovo max-w-4xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        >
            Welcome to my portfolio! Here you'll find a collection of innovative projects that showcase my passion for creating 
            meaningful digital solutions. Each project represents my commitment to building exceptional user experiences 
            with modern technologies, from full-stack web applications to AI-powered platforms and mobile solutions.
        </motion.p>
        <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-10 gap-6'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        >
            {workData.map((project, index) => (
                <motion.div 
                key={index}
                className='bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group h-64 md:h-72 lg:h-80 overflow-hidden'
                style={{ backgroundImage: `url(${project.bgImage})` }}
                onClick={() => openModal(project)}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                whileHover={{ y: -8, scale: 1.02 }}
                >
                    <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300'></div>
                    <div className='bg-white w-11/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-300 group-hover:bottom-6 shadow-lg'>
                    <div className='flex-1'>
                        <h2 className='font-semibold text-gray-800 text-sm md:text-base truncate'>{project.title}</h2>
                        <p className='text-gray-700 text-xs md:text-sm mt-1 line-clamp-2'>{project.description}</p>
                    </div>
                    <div className='ml-3 flex-shrink-0'>
                        {project.link ? (
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className='block'
                            >
                                <Image 
                                    src={assets.send_icon} 
                                    alt='Visit Project' 
                                    className='w-4 md:w-5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer' 
                                />
                            </a>
                        ) : (
                            <Image 
                                src={assets.send_icon} 
                                alt='Send Icon' 
                                className='w-4 md:w-5 opacity-70 group-hover:opacity-100 transition-opacity' 
                            />
                        )}
                     </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        {/* Modal para la imagen completa */}
        <AnimatePresence>
        {selectedImage && (
          <motion.div 
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4'
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          >
            <motion.div 
            className='relative w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl max-h-[95vh] h-auto'
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={closeModal}
                className='absolute top-2 right-2 text-white bg-black bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition-all z-20'>
                <Image src={assets.close_white} alt='Close' className='w-4 h-4' />
              </button>
              <div className='relative w-full h-auto'>
                {/* Si es BookEater y tiene galería, mostrar navegación de imágenes */}
                {selectedImage.title === 'BookEater' && selectedImage.gallery ? (
                  <div className='relative'>
                    {/* Imagen actual */}
                    <div className='relative'>
                      <Image 
                        src={getCurrentImageSrc()} 
                        alt={`${selectedImage.title} - Image ${currentImageIndex + 1}`}
                        width={400}
                        height={800}
                        className='w-full h-auto object-contain rounded-lg max-h-[80vh] sm:max-h-[85vh]'
                      />
                      
                      {/* Botón anterior */}
                      <motion.button
                        onClick={prevImage}
                        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-10'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Image src={assets.arrow_icon} alt='Previous' className='w-4 h-4 rotate-180' />
                      </motion.button>
                      
                      {/* Botón siguiente */}
                      <motion.button
                        onClick={nextImage}
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-10'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Image src={assets.arrow_icon} alt='Next' className='w-4 h-4' />
                      </motion.button>
                      
                      {/* Indicador de posición */}
                      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm'>
                        {currentImageIndex + 1} / {selectedImage.gallery.length + 1}
                      </div>
                    </div>
                    
                    {/* Miniaturas navegables */}
                    <div className='mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-[20vh] overflow-y-auto'>
                      {/* Miniatura de imagen principal */}
                      <motion.div
                        onClick={() => setCurrentImageIndex(0)}
                        className={`cursor-pointer transition-all border-2 rounded-md overflow-hidden ${
                          currentImageIndex === 0 ? 'border-blue-500' : 'border-gray-300 hover:border-gray-400'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image 
                          src={selectedImage.bgImage} 
                          alt={`${selectedImage.title} - Main`}
                          width={100}
                          height={200}
                          className='w-full h-auto object-cover aspect-[1/2]'
                        />
                      </motion.div>
                      
                      {/* Miniaturas de galería */}
                      {selectedImage.gallery.map((imageSrc, index) => (
                        <motion.div
                          key={index}
                          onClick={() => setCurrentImageIndex(index + 1)}
                          className={`cursor-pointer transition-all border-2 rounded-md overflow-hidden ${
                            currentImageIndex === index + 1 ? 'border-blue-500' : 'border-gray-300 hover:border-gray-400'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Image 
                            src={imageSrc} 
                            alt={`${selectedImage.title} - Image ${index + 2}`}
                            width={100}
                            height={200}
                            className='w-full h-auto object-cover aspect-[1/2]'
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Imagen única para otros proyectos */
                  <Image 
                    src={selectedImage.bgImage} 
                    alt={selectedImage.title}
                    width={selectedImage.title === 'BookEater' ? 400 : 1200}
                    height={selectedImage.title === 'BookEater' ? 800 : 800}
                    className='w-full h-auto object-contain rounded-lg max-h-[80vh] sm:max-h-[85vh]'
                  />
                )}
                {/* Información del proyecto debajo de la imagen en móvil, overlay en desktop */}
                <div className='block sm:hidden bg-gray-900 p-4 rounded-b-lg'>
                  <h3 className='text-white text-lg font-bold mb-2'>{selectedImage.title}</h3>
                  <p className='text-gray-200 text-sm mb-3'>{selectedImage.description}</p>
                  {selectedImage.link && (
                    <a 
                      href={selectedImage.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors'
                    >
                      Visit Project <Image src={assets.send_icon} alt='Visit' className='w-4 h-4' />
                    </a>
                  )}
                </div>
                <div className='hidden sm:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 rounded-b-lg'>
                  <h3 className='text-white text-lg md:text-xl font-bold mb-1'>{selectedImage.title}</h3>
                  <p className='text-gray-200 text-sm md:text-base mb-3'>{selectedImage.description}</p>
                  {selectedImage.link && (
                    <a 
                      href={selectedImage.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors'
                    >
                      Visit Project <Image src={assets.send_icon} alt='Visit' className='w-4 h-4' />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
         {/* <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'>
        Show More <Image src={assets.right_arrow_bold} alt='Arrow' className='w-4' />
    </a> */}
    </motion.div>
   
  )
}

export default Work
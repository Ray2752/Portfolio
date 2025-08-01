import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <motion.footer 
    className='mt-20 py-8 border-t border-gray-200 dark:border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            {/* Main footer content */}
            <motion.div 
            className='text-center mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                <motion.h3 
                className='text-lg font-semibold mb-4'
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                >
                    Let's Connect
                </motion.h3>
                <motion.div 
                className='flex flex-wrap justify-center gap-6 mb-4'
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.a 
                    href='https://www.linkedin.com/in/raymundo-pérez' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a 
                    href='tel:+529513007412' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        Phone: +52 951 300 74 12
                    </motion.a>
                    <motion.a 
                    href="https://github.com/Ray2752" 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                    </motion.a>
                </motion.div>
                <motion.div 
                className='mb-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>Get in touch via email</p>
                    <motion.a 
                    href='mailto:perez_prz_ray@hotmail.com' 
                    className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors'
                    whileHover={{ scale: 1.02 }}
                    >
                        perez_prz_ray@hotmail.com
                    </motion.a>
                </motion.div>
            </motion.div>
            
            {/* Bottom section */}
            <motion.div 
            className='border-t border-gray-200 dark:border-gray-700 pt-6 text-center'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            >
                <motion.div 
                className='flex flex-col sm:flex-row justify-between items-center gap-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                >
                    <motion.p 
                    className='text-sm text-gray-600 dark:text-gray-400'
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    >
                        © 2025 Raymundo Pérez
                    </motion.p>
                    <motion.p 
                    className='text-sm text-gray-600 dark:text-gray-400'
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                    >
                        Built with React.js, Next.js & Tailwind CSS
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    </motion.footer>
  )
}

export default Footer
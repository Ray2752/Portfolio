import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-20 py-8 border-t border-gray-200 dark:border-gray-700'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            {/* Main footer content */}
            <div className='text-center mb-6'>
                <h3 className='text-lg font-semibold mb-4'>Let's Connect</h3>
                <div className='flex flex-wrap justify-center gap-6 mb-4'>
                    <a href='https://www.linkedin.com/in/raymundo-pérez' target='_blank' rel='noopener noreferrer' 
                       className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'>
                        LinkedIn
                    </a>
                    <a href='tel:+529513007412' target='_blank' rel='noopener noreferrer' 
                       className='text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors'>
                        Phone: +52 951 300 74 12
                    </a>
                    <a href="https://github.com/Ray2752" target='_blank' rel='noopener noreferrer' 
                       className='text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors'>
                        GitHub
                    </a>
                </div>
                <div className='mb-4'>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>Get in touch via email</p>
                    <a href='mailto:perez_prz_ray@hotmail.com' 
                       className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors'>
                        perez_prz_ray@hotmail.com
                    </a>
                </div>
            </div>
            
            {/* Bottom section */}
            <div className='border-t border-gray-200 dark:border-gray-700 pt-6 text-center'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        © 2025 Raymundo Pérez
                    </p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Built with React.js, Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
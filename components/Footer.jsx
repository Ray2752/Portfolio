import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16'>
        <div className='text-center '>
            <p className='mt-4'>© 2025 My Portfolio.</p>
            <p className='text-sm text-gray-500'>Follow me on 
                <a href='https://www.linkedin.com/in/raymundo-pérez' target='_blank' rel='noopener noreferrer'className='text-blue-500 hover:underline'> LinkedIn</a>
                <a href="https://www.instagram.com/ray._.perez/" target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'> Instagram</a>
                <a href="https://github.com/Ray2752" target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'> GitHub</a>
            </p>
        </div>
        <div>
            <p className='text-center text-sm mt-2'>By Raymundo Pérez</p>
        </div>
    </div>
  )
}

export default Footer
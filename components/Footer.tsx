import { footer } from 'motion/react-client'
import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        
        {/* 1. About */}
        <div className='space-y-4'>
            <h3 className='text-white text-lg font-semibold'>About</h3>
            <p className='text-sm'>
              We are a leading provider of online learning and music instruction, helping people achieve their creative goals.
            </p>
        </div>

        {/* 2. Quick Links */}
        <div className='space-y-4'>
            <h3 className='text-white text-lg font-semibold'>Quick Link</h3>
            <ul className='space-y-2'>
                <li>
                    <a href="/" className='hover:text-white transition-colors duration-300'>Home</a>
                </li>
                <li>
                    <a href="/course" className='hover:text-white transition-colors duration-300'>Courses</a>
                </li>
                <li>
                    <a href="/About" className='hover:text-white transition-colors duration-300'>About Us</a>
                </li>
                <li>
                    <a href="/Contact" className='hover:text-white transition-colors duration-300'>Contact</a>
                </li>
            </ul>
        </div>

        {/* 3. Follow Us */}
        <div className='space-y-4'>
            <h3 className='text-white text-lg font-semibold'>Follow Us</h3>
            <div className='flex flex-col space-y-2'>
                <a href="#" className='hover:text-white transition-colors duration-300'>Facebook</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Twitter</a>
                <a href="#" className='hover:text-white transition-colors duration-300'>Instagram</a>
            </div>
        </div>

        {/* 4. Contact Us */}
        <div className='space-y-4'>
            <h3 className='text-white text-lg font-semibold'>Contact Us</h3>
            <p className='text-sm'>New Delhi, India</p>
            <p className='text-sm'>Delhi 10001</p>
            <p className='text-sm'>Email: info@musicwebsite.com</p>
            <p className='text-sm'>Phone: (123) 456-7890</p>
        </div>
      </div>
      
      {/* Copyright Section (Optional) */}
      <div className='mt-8 border-t border-gray-700 pt-8 text-center'>
        <p className='text-sm'>© 2025 Music Academy. All rights reserved.</p>
      </div>

   </footer>
  )
}

export default Footer
import React from 'react'

const Footer = () => {
  return (
      <div>
         <div className='py-4 bg-[#131212] '>
            {/* Copyright */}
         <p className="text-center text-gray-500 text-sm">&copy; {new Date().getFullYear()} NextMoveOnly. All rights reserved.</p>
         </div>
      </div>
  )
}

export default Footer
import React, { useEffect } from 'react'

import { Link } from '@inertiajs/react';

function Events({event}) {
    
  return (
    <div className=" overflow-hidden transition-shadow duration-300 bg-white rounded shadow-2xl shadow-gray-300">
            <img
              src={'/images/gallery/kiru-03.jpg'}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Road
                </span>
                <span className="text-gray-600">— {'Ongoing'}</span>
              </p>
              <span
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-1xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {'Bweyogerere - Bukasa Road'}
              </span>
             
              
            </div>
          </div>
  )
}

export default Events
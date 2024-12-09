import { Link } from '@inertiajs/react'
import { Button } from '@material-tailwind/react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full sticky'>
        <div className="bg-gradient-to-r from-secondary to-primary shadow px-4 pt-16 mx-auto">
        <div className="w-full grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
            <img src='/images/resources/kiru-logo.png' className='h-14'/>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-50">
              Kiru General Services is a leading construction company specializing in roads, buildings, and water works.
              </p>
              <p className="mt-4 text-sm text-gray-50">
              With a commitment to quality, safety, and sustainability, we deliver infrastructure solutions that drive progress and transform communities.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-50">Phone:</p>
              <a
                href="tel:+256765974111"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-gray-100 hover:text-deep-purple-800"
              >
                +256 (0) 414 289 803 <br/> +256 (0) 414 574 505<br/>+256 (0) 772 401 781<br/>+256 (0) 752 401 781
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-50">Email:</p>
              <a
                href="mailto:info@kiru.co.ug"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-gray-100 hover:text-deep-purple-800"
              >
                info@kiru.co.ug
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-50">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-gray-100 hover:text-deep-purple-800"
              >
                Plot 2568 Nsubuga Kakembo Drive, Buye - Ntinda
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Management
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <Link href='/login'>
              <Button color='white'>
                Login Admin
              </Button>
              </Link>
            </div>
            {/* <p className="mt-4 text-sm text-gray-50">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p> */}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-50">
            © Copyright {(new Date().getFullYear())} Kiru General Services. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-50 transition-colors duration-300 hover:text-gray-100"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-50 transition-colors duration-300 hover:text-gray-100"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-50 transition-colors duration-300 hover:text-gray-100"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
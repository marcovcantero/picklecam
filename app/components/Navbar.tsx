'use client'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 backdrop-filter bg-white w-full top-0 z-50 fixed">
      <div className="max-w-7xl mx-auto px-12 sm:px-12 lg:px-">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/">
              <Image
                src="/pc_logo_black.png"
                alt="PickleCam Logo"
                width={160}
                height={40}
                className="object-contain h-auto w-auto"
              />
            </a>
          </div>

          {/* Social Icons on the right */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-black w-7 h-7 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-black w-8 h-8 hover:text-gray-300" />
            </a>
            <a href="mailto:support@picklecam.com">
              <MdEmail className="text-black w-8 h-8 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

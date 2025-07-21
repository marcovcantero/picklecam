'use client'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className="bg-darkblue w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a href="/">
              <Image
                src="/pc_logo.png"
                alt="PickleCam Logo"
                width={160}
                height={40}
                className="object-contain h-auto w-auto"
              />
            </a>
          </div>

          {/* Social Icons on the right */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white w-5 h-5 hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-white w-6 h-6 hover:text-gray-300" />
            </a>
            <a href="mailto:support@picklecam.com">
              <MdEmail className="text-white w-6 h-6 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

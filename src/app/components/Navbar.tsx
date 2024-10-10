"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image width={200} height={50} src="/images/logo.png" alt="St. Thomas Logo" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" className={`hover-grow ${scrolled ? 'text-gray-700' : 'text-white'} px-3 py-2 rounded-md text-sm font-medium`}>About Us</Link>
                <Link href="/activities" className={`hover-grow ${scrolled ? 'text-gray-700' : 'text-white'} px-3 py-2 rounded-md text-sm font-medium`}>Activities & Awards</Link>
                <Link href="/gallery" className={`hover-grow ${scrolled ? 'text-gray-700' : 'text-white'} px-3 py-2 rounded-md text-sm font-medium`}>Photo Gallery</Link>
                <Link href="/contact" className={`hover-grow ${scrolled ? 'text-gray-700' : 'text-white'} px-3 py-2 rounded-md text-sm font-medium`}>Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="hover-grow text-gray-700 block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
            <Link href="/activities" className="hover-grow text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Activities & Awards</Link>
            <Link href="/gallery" className="hover-grow text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Photo Gallery</Link>
            <Link href="/contact" className="hover-grow text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
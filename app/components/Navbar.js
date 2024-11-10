// components/Navbar.js
"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ backgroundColor: '#123456' }} className="text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Toggle Button (visible on small screens) */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 items-center absolute md:static top-full w-full md:w-auto bg-[#123456] md:bg-transparent z-10 transition-transform duration-300 ease-in-out`}
        >
          <Link href="/" className="block py-2 md:py-0 text-center hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 md:py-0 text-center hover:text-gray-200">
            About Us
          </Link>
          <Link href="/services" className="block py-2 md:py-0 text-center hover:text-gray-200">
            Services
          </Link>
          <Link href="/contact" className="block py-2 md:py-0 text-center hover:text-gray-200">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-8">
          {/* Services Section */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-semibold uppercase mb-4">Services</h4>
            <ul className="text-white space-y-2">
              <li><Link href="#">Lorem Ipsum</Link></li>
              <li><Link href="#">Simply dummy text</Link></li>
              <li><Link href="#">The printing and typesetting</Link></li>
              <li><Link href="#">Standard dummy text</Link></li>
              <li><Link href="#">Type specimen book</Link></li>
            </ul>
          </div>

          {/* Page Link Section */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-semibold uppercase mb-4">Page Link</h4>
            <ul className="text-white space-y-2">
              <li><Link href="#">Lorem Ipsum</Link></li>
              <li><Link href="#">Simply dummy text</Link></li>
              <li><Link href="#">The printing and typesetting</Link></li>
              <li><Link href="#">Standard dummy text</Link></li>
              <li><Link href="#">Type specimen book</Link></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-white text-lg font-semibold uppercase mb-4">Subscribe today</h4>
            <form className="flex mt-4">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="#"><span className="text-white text-2xl">F</span></Link>
          <Link href="#"><span className="text-white text-2xl">T</span></Link>
          <Link href="#"><span className="text-white text-2xl">G</span></Link>
          <Link href="#"><span className="text-white text-2xl">I</span></Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm mt-8 border-t border-white/20 pt-4">
          Copyright © 2023 <Link href="#" className="text-cyan-300 hover:text-pink-400">YourCompany</Link>
        </div>
      </div>
    </footer>
  );
}
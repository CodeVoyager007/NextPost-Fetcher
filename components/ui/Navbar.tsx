'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-serif">NextPost Fetcher</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className={`absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:static md:shadow-none md:justify-end`}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <Link href="/" className="text-black hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 font-serif text-xl hover:underline">
              Home
            </Link>
            <Link href="/fetch-posts" className="text-black hover:text-gray-700 transition duration-300 ease-in-out transform hover:scale-105 font-serif text-xl hover:underline">
              Posts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
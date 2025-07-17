import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-24 items-center">
          {/* Logo on the left - enlarged */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/images\logo.jpg"
                alt="Sparsh Academy"
              />
              <span className="ml-4 text-3xl font-bold text-gray-900">
                <span className="text-indigo-600">Sparsh</span> Academy
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Right side - enlarged */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-4 py-3 text-lg font-semibold transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-4 py-3 text-lg font-semibold transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-4 py-3 text-lg font-semibold transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-4 py-3 text-lg font-semibold transition-colors duration-200"
            >
              Why Choose Us
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-4 py-3 text-lg font-semibold transition-colors duration-200"
            >
              Academics
            </a>
            <a
              href="#"
              className="ml-10 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button - enlarged */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - enlarged */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl" id="mobile-menu">
          <div className="px-4 pt-3 pb-5 space-y-2">
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              Gallery
            </a>
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              Why Choose Us
            </a>
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              Academics
            </a>
            <a
              href="#"
              className="block px-5 py-4 rounded-lg text-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
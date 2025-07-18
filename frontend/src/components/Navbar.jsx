import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/why-choose-us', name: 'Why Choose Us' },
    { path: '/academics', name: 'Academics' },
    { path: '/contact', name: 'Contact Us', isButton: true }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
            <div className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/images/logo.jpg"
                alt="Sparsh Academy"
              />
              <span className="ml-4 text-3xl font-bold text-gray-900">
                <span className="text-indigo-600">Sparsh</span> Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              item.isButton ? (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `ml-10 inline-flex items-center justify-center px-6 py-3 rounded-lg shadow-md text-lg font-semibold transition-colors duration-200 ${
                      isActive 
                        ? 'bg-indigo-700 text-white' 
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-4 py-3 text-lg font-semibold transition-colors duration-200 ${
                      isActive 
                        ? 'text-indigo-600' 
                        : 'text-gray-900 hover:text-indigo-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-8 w-8" />
              ) : (
                <FaBars className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl" id="mobile-menu">
          <div className="px-4 pt-3 pb-5 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `block px-5 py-4 rounded-lg text-xl font-semibold transition-colors ${
                    isActive
                      ? item.isButton
                        ? 'bg-indigo-700 text-white'
                        : 'text-indigo-600 bg-gray-50'
                      : item.isButton
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'text-gray-900 hover:text-indigo-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
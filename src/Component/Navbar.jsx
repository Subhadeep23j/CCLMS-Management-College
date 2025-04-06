import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import clg_logo from '../assets/clg_logo.webp'; // Adjust the path as necessary
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Function to check if a route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and college name section */}
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center">
              <img 
                className="h-10 w-auto" 
                src={clg_logo} 
                alt="College Logo" 
              />
              <div className="ml-1 hidden sm:block">
                <span className="text-lg font-bold text-white">Contai College of Learning & Management Science</span>
                <div className="text-xs text-blue-100">Affiliated to: MAKAUT, College Code: 340</div>
              </div>
              <div className="ml-1 sm:hidden">
                <span className="text-base font-bold text-white text-xs">Contai College of Learning & Management Science</span>
              </div>
            </Link>
          </div>
          
          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3">
            <NavLink 
              to="/" 
              className={`${isActiveRoute('/') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Home
            </NavLink>
            {/* <NavLink 
              to="/academics" 
              className={`${isActiveRoute('/academics') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Academics
            </NavLink> */}
            <NavLink 
              to="/courses" 
              className={`${isActiveRoute('/courses') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Courses
            </NavLink>
            <NavLink 
              to="/admissions" 
              className={`${isActiveRoute('/admissions') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Admissions
            </NavLink>
            <NavLink 
              to="/Gallery" 
              className={`${isActiveRoute('/Gallery') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`${isActiveRoute('/contact') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/about" 
              className={`${isActiveRoute('/about') ? 'border-white text-white' : 'border-transparent hover:border-blue-300 text-white hover:text-blue-100'} px-2 pb-2 pt-5 border-b-2 font-medium text-sm`}
            >
              About
            </NavLink>
          </div>
          
          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex lg:items-center">
            <Link 
              to="/login" 
              className="bg-white text-blue-700 hover:bg-blue-100 px-3 py-2 rounded-md font-medium text-sm"
            >
              Login
            </Link>
            <Link 
              to="/apply" 
              className="ml-3 bg-blue-800 text-white hover:bg-blue-900 px-3 py-2 rounded-md font-medium text-sm"
            >
              Apply Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-800 focus:outline-none"
            >
              <svg 
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-blue-800 w-full`}>
        {/* Mobile college info */}
        <div className="px-4 py-2 border-b border-blue-700">
          <div className="text-sm font-medium text-white">Contai College of Learning & Management Science</div>
          <div className="text-xs text-blue-100">Affiliated to: MAKAUT, College Code: 340</div>
        </div>
        
        {/* Mobile nav links */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          {/* <NavLink 
            to="/academics" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Academics
          </NavLink> */}
          <NavLink 
            to="/courses" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/admissions" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Admissions
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" : 
              "text-white hover:bg-blue-900 hover:text-blue-100 block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </div>
        
        {/* Mobile action buttons */}
        <div className="pt-4 pb-3 border-t border-blue-700">
          <div className="grid grid-cols-2 gap-3 px-4">
            <Link 
              to="/login"
              className="bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-md font-medium text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/apply"
              className="bg-blue-900 text-white hover:bg-blue-950 px-4 py-2 rounded-md font-medium text-sm text-center"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
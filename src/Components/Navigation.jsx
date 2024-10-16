import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleSidebar = () => setIsOpen(prevState => !prevState);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-black text-white flex justify-between items-center p-6">
      <img src={logo} alt="logo" className="ml-5" />

      <ul className="hidden md:flex gap-16 mr-5">
        <li><Link className='no-underline text-white' to='/'>Home</Link></li>
        <li 
          className="relative" 
          onMouseEnter={() => setIsDropdownOpen(true)} 
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link className='no-underline text-white' to='#'>Series</Link>
          {isDropdownOpen && (
            <div className="absolute left-0 w-48 bg-white text-black rounded shadow-lg z-10">
              <Link 
                className="block px-4 py-2 hover:bg-gray-200" 
                to="/upcoming_page" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Upcoming Video
              </Link>
              <Link 
                className="block px-4 py-2 hover:bg-gray-200" 
                to="/latest_videos" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Latest Video
              </Link>
              <Link 
                className="block px-4 py-2 hover:bg-gray-200" 
                to="/old_videos" 
                onClick={() => setIsDropdownOpen(false)}
              >
                Old Video
              </Link>
            </div>
          )}
        </li>
        <li><Link className='no-underline text-white' to='/about'>About</Link></li>
        <li><Link className='no-underline text-white' to='/contact'>Contact</Link></li>
      </ul>

      <FaBars size={28} className="md:hidden mr-5 cursor-pointer" onClick={toggleSidebar} />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <FaTimes size={28} className="absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar} />

        <ul className="flex flex-col items-center gap-8 mt-16 cursor-pointer">
          {['Home', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link 
                className='no-underline text-white'
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                onClick={toggleSidebar}
              >
                {item}
              </Link>
            </li>
          ))}
          <li 
            className="relative" 
            onMouseEnter={handleDropdownToggle} 
            onMouseLeave={handleDropdownToggle}
          >
            <span className='no-underline text-white cursor-pointer'>Series</span>
            {isDropdownOpen && (
              <div className="absolute left-0 w-48 bg-white text-black rounded shadow-lg z-10">
                <Link 
                  className="block px-4 py-2 hover:bg-gray-200" 
                  to="/upcoming_page" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    toggleSidebar();
                  }}
                >
                  Upcoming Video
                </Link>
                <Link 
                  className="block px-4 py-2 hover:bg-gray-200" 
                  to="/latest_videos" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    toggleSidebar();
                  }}
                >
                  Latest Video
                </Link>
                <Link 
                  className="block px-4 py-2 hover:bg-gray-200" 
                  to="/old_videos" 
                  onClick={() => {
                    setIsDropdownOpen(false);
                    toggleSidebar();
                  }}
                >
                  Old Video
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

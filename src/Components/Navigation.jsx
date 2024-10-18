import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed

  const toggleSidebar = () => {
    if (isSmallScreen) {
      setIsOpen(prevState => !prevState);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the sidebar if switching to a larger screen
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-black text-white flex justify-between items-center p-6">
      <img src={logo} alt="logo" className="ml-5" />

      <ul className="hidden md:flex gap-16 mr-5">
        <li><Link className='no-underline text-white' to='/'>Home</Link></li>
        <li
          className="relative hs-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className='no-underline text-white cursor-pointer'>Series</span>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out mt-0 w-48 z-10 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          >
            <div className="p-1 space-y-0.5">
              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/upcoming_page" onClick={() => setIsDropdownOpen(false)}>Upcoming Video</Link>
              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/latest_videos" onClick={() => setIsDropdownOpen(false)}>Latest Video</Link>
              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/old_videos" onClick={() => setIsDropdownOpen(false)}>Old Video</Link>
            </div>
          </div>
        </li>
        <li><Link className='no-underline text-white' to='/about'>About</Link></li>
        <li><Link className='no-underline text-white' to='/contact'>Contact</Link></li>
      </ul>

      <FaBars size={28} className="md:hidden mr-5 cursor-pointer" onClick={toggleSidebar} />

      <div className={`fixed top-0 right-0 h-full w-full bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <FaTimes size={28} className="absolute top-4 right-4 cursor-pointer" onClick={toggleSidebar} />

        <ul className="flex flex-col items-center gap-8 mt-16 cursor-pointer">
          {['Home', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link className='no-underline text-white' to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={toggleSidebar}>
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
            <div className={`absolute left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out mt-0 w-44 z-10 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <div className="p-1 space-y-0.5">
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/upcoming_page" onClick={() => { setIsDropdownOpen(false); toggleSidebar(); }}>Upcoming Video</Link>
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/latest_videos" onClick={() => { setIsDropdownOpen(false); toggleSidebar(); }}>Latest Video</Link>
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-100 hover:bg-[#ff5e14]" to="/old_videos" onClick={() => { setIsDropdownOpen(false); toggleSidebar(); }}>Old Video</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

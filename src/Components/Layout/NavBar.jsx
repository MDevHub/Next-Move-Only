import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')));

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncUser = () => {
      const storedUser = JSON.parse(localStorage.getItem('currentUser'));
      setCurrentUser(storedUser);
    };
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isSticky ? 'fixed top-0 bg-black bg-opacity-90 shadow-md' : 'relative'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6 md:px-10 bg-black">
          {/* Left: Links */}
          <div className="hidden md:flex flex-1 space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-gray-800">Home</Link>
            <Link to="" className="hover:text-gray-800">Subscribe to Our Newsletter</Link>
          </div>

          {/* Center: Logo */}
          <Link to="/" className="z-50 text-white">
            <p className='text-xl'>Next Move Only</p>
          </Link>

          {/* Hamburger */}
          <button className="md:hidden text-[white] text-2xl z-50" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-[#121212] text-white z-50 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Menu</h3>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <nav className="flex flex-col space-y-4 p-6 font-medium">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-800">Home</Link>
          <Link to="" onClick={toggleMenu} className="hover:text-gray-800">Subscribe to Our Newsletter</Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

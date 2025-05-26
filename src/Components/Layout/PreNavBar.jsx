import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTruckFast,
  FaCircleCheck,
  FaBatteryFull,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';

const PreNavBar = () => {
  return (
    <div className="w-full bg-[#1b1b1b] px-6 md:px-10 py-4 flex items-center justify-between text-sm">
      {/* Left: Social Icons */}
      <div className="flex items-center gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaXTwitter size={18} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebookF size={18} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaInstagram size={18} />
        </a>
      </div>
    </div>
  );
};

export default PreNavBar;

import React from 'react';
import Slider1 from '../../../assets/Images/TRW BG.gif';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={Slider1}
        alt="Hero background"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-end justify-start text-white px-6 sm:px-10 md:px-12 py-12 sm:py-16 bg-black bg-opacity-50">
        <div className="mb-16 sm:mb-24 max-w-full sm:max-w-[85%] md:max-w-[50%]">
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Experience the freedom of the ride
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mb-6 sm:mb-8">
            <Link to="">
              <button className="bg-black px-6 py-2 text-sm sm:text-base rounded-full w-full sm:w-auto">
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-white text-black px-6 py-2 text-sm sm:text-base rounded-full w-full sm:w-auto">
                Learn More From Our Ebooks
              </button>
            </Link>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-base opacity-80 sm:max-w-[60%]">
            Have access the NMO Exclusive E-books
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

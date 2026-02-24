import React from "react";
import { FaTruck, FaChevronDown } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[#0E7490] text-white text-sm">
      <div className="container mx-auto px-4 lg:px-4 py-2 flex flex-col lg:flex-row items-center justify-between gap-2">

        {/* LEFT - Countdown */}
        <div className="text-center lg:text-left">
          <span className="font-semibold text-lg">Until the end of the sale:</span>
          <span className="ml-2">
            <span className="font-bold text-lg">628</span> Days 
            <span className="font-bold text-lg ml-2">15</span> Hours  
           <span className="font-bold text-lg ml-2">58</span> Minutes             
           <span className="font-bold text-lg ml-2">34</span> Sec.
          </span>
        </div>

        {/* CENTER - Offer */}
        <div className="text-center hidden md:block">
          Buy one get one free on
          <span className="text-yellow-300 font-semibold ml-1">
            first order
          </span>
        </div>

        {/* RIGHT - Links */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200">
            <FaTruck size={14} />
            <span>Track Your Order</span>
          </div>

          <span className="hidden sm:inline cursor-pointer hover:text-gray-200">
            Order Tracking
          </span>

          <span className="hidden sm:inline cursor-pointer hover:text-gray-200">
            About Us
          </span>

          {/* Language */}
          <div className="flex items-center gap-1 cursor-pointer">
            Eng <FaChevronDown size={10} />
          </div>

          {/* Currency */}
          <div className="flex items-center gap-1 cursor-pointer">
            USD <FaChevronDown size={10} />
          </div>
        </div>

      </div>
    </div>
  );
}
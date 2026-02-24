import React from "react";
import { FaChevronDown, FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import logo from "../../assets/logoMarketpro.png";

export default function Header() {
  return (
    <header className="bg-white border-b border-b-gray-200">
      <div className="container mx-auto px-4 lg:px-4 py-8">
        <div className="flex items-center justify-between gap-6">

          {/* ================= LOGO ================= */}
          <div className="flex items-center min-w-fit">
            <img src={logo} alt="Marketpro" className="h-10" />
          </div>

          {/* ================= SEARCH SECTION ================= */}
          <div className="hidden md:flex flex-1 max-w-3xl">

            <div className="flex w-full py-1 border border-gray-300 rounded-sm overflow-hidden">

              {/* Categories Dropdown */}
              <div className="flex items-center gap-2 px-4 bg-gray-50 border-r border-r-gray-300 cursor-pointer text-sm font-medium">
                All categories
                <FaChevronDown size={12} />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="flex-1 px-4 py-2 focus:outline-none text-sm"
              />

              {/* Search Button */}
              <button className="bg-[#0E7490] px-6 text-white flex items-center justify-center rounded-md py-3 hover:bg-[#0c6176] transition mr-2">
                <GoSearch size={18} />
              </button>

            </div>
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-6 text-sm">

            {/* Profile */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#0E7490]">
              <FaRegUser size={18} />
              <span className="hidden sm:inline">Profile</span>
            </div>

            {/* Wishlist */}
            <div className="relative flex items-center gap-2 cursor-pointer hover:text-[#0E7490]">
              <FaRegHeart size={18} />
              <span className="hidden sm:inline">Wishlist</span>
              <span className="absolute -top-2 right-12 bg-[#0E7490] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>

            {/* Cart */}
            <div className="relative flex items-center gap-2 cursor-pointer hover:text-[#0E7490]">
              <IoCartOutline size={20} />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-2 right-7 bg-[#0E7490] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { LuGitCompareArrows } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import EkoMart from '../../assets/logo-EkoMart.svg';
import Categories from '../../assets/bar-1.svg';

export default function Header({ title = 'EKOMART' }) {
  return (
    <div>
      {/* Top Info Bar */}
      <div className="bg-[#79ad41] text-white text-[16px] px-24 py-2 flex justify-between border-b border-b-[#88b558]">
        <span>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</span>
        <div className="flex gap-12">
          <span>Need help? Call Us:+258 3268 21485</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#79ad41] text-white border-b border-[#88b558]">
        <div className="px-24 py-8">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-3 min-w-fit">
              <img src={EkoMart} alt='logo'/>
            </div>

            {/* Search */}
            <div className="flex-1 flex gap-0 max-w-xl">
              <button className="bg-white text-gray-700 px-4 py-4 rounded-l-md border-r border-r-gray-300 font-semibold text-[16px] hover:bg-[#2C3C28] hover:text-white">
               <span className='flex gap-2'> <img src={Categories} alt='Categories' /> Categories</span>
              </button>
              <input
                type="text"
                placeholder="Search for products, categories or brands"
                className="bg-white flex-1 px-4 py-2 text-gray-700 focus:outline-none text-sm border border-white"
              />
              <div className='bg-white flex justify-center items-center rounded-r-md'> 
                <button className="flex justify-center items-center gap-2 bg-[#629D23] text-white px-5 py-2.5 rounded-md font-bold hover:bg-[#2C3C28] text-[16px] mr-1">
                Search <GoSearch size={20} className='font-bold text-xl'/> 
              </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 min-w-fit">
              <button className="flex justify-center items-center gap-2 bg-white text-gray-800 px-4 py-4 w-32 rounded-md font-semibold text-[16px] hover:bg-[#2C3C28] hover:text-white">
                <FaRegUser size={20} /> Account
              </button>
              <div className="relative">
                <button className="flex justify-center items-center gap-2 bg-white text-gray-800 px-4 py-4 w-16 rounded-md font-semibold text-[16px] hover:bg-[#2C3C28] hover:text-white">
                  <LuGitCompareArrows size={20}/><span className="absolute top-1 right-4 bg-[#79ad41] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
                </button>
              </div>
              <div className="relative">
                <button className="flex justify-center items-center gap-2 bg-white text-gray-800 px-4 py-4 w-32 rounded-md font-semibold text-[16px] hover:bg-[#2C3C28] hover:text-white">
                  <FaRegHeart size={20}/><span className="absolute top-1.5 right-19 bg-[#79ad41] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span> Wishlist
                </button>
                
              </div>
              <div className="relative">
                <button className="flex justify-center items-center gap-2 bg-white text-gray-800 px-4 py-4 w-28 rounded-md font-semibold text-[16px] hover:bg-[#2C3C28] hover:text-white">
                  <IoCartOutline size={20}/><span className="absolute top-2 right-14 bg-[#79ad41] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span> Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - STICKY */}
      <nav className="sticky top-0 z-50 bg-[#79ad41] text-white border-b border-[#88b558] shadow-md">
        <div className="px-24 flex items-center justify-between py-4">
          <div className="flex gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-green-100 transition">Home</a>
            <a href="#" className="hover:text-green-100 transition">About</a>
            <a href="#" className="hover:text-green-100 transition">Shop</a>
            <a href="#" className="hover:text-green-100 transition">Vendors</a>
            <a href="#" className="hover:text-green-100 transition">Pages</a>
            <a href="#" className="hover:text-green-100 transition">Blog</a>
            <a href="#" className="hover:text-green-100 transition">Dashboard</a>
            <a href="#" className="hover:text-green-100 transition">Contact</a>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaLocationDot size={20}/><span className='text-md font-semibold'> Delivery:</span> 
            <span className='text-xs'>258 FKO Street, Berlin</span></div>
        </div>
      </nav>
    </div>
  )
}

import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import organic2 from "../../assets/organic2.png";

export default function ProductCard({ product, variant = "popular" }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">

      {/* IMAGE CONTAINER */}
      <div className="relative border border-gray-200 rounded-md h-56 flex items-center justify-center mb-4 overflow-hidden group">

        {/* Ribbon */}
        {/* {(variant === 'popular' &&
            <div className="absolute top-0 left-4 z-10">
            <div className="relative bg-[#F4B740] text-black text-[11px] font-bold px-2 py-1 text-center w-[46px] leading-tight">
                25% <br /> Off
                <div className="absolute left-0 right-0 -bottom-2 mx-auto w-0 h-0 border-l-[12px] border-r-[12px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#F4B740]" />
            </div>
            </div>
        )} */}
        {variant === "popular" && (
        <div className="absolute top-0 left-10 z-20">
            <div
            className="bg-[#F4B740] text-black text-[10px] font-bold w-[40px] text-center py-2 leading-tight"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%)",
            }}
            >
            25% <br /> Off
            </div>
        </div>
        )}
        {/* ON SALE Badge → Sales Only */}
        {variant === "sales" && (
            <div className="absolute top-0 left-0 bg-[#79ad41] text-white text-xs font-semibold px-3 py-1 rounded-l-sm rounded-b-sm rounded-bl-none z-10">
                ON SALE
            </div>
        )}

        {/* Hover icons*/}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
            <div className="bg-[#79ad41] rounded-r-xl rounded-l-xl rounded-t-md rounded-b-none px-4 py-2 flex gap-2 text-white text-sm">
              <button className="border border-dashed rounded-full p-1 hover:border-none hover:bg-white hover:text-[#79ad41]"><FaRegHeart size={18} /></button>
              <button className="border border-dashed rounded-full p-1 hover:border-none hover:bg-white hover:text-[#79ad41]"><HiMiniArrowPathRoundedSquare size={20} /></button>
              <button className="border border-dashed rounded-full p-1 hover:border-none hover:bg-white hover:text-[#79ad41]"><FaEye size={20} /></button>
            </div>
          </div>
        

        <img
          src={organic2}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

       {/* ⭐ Star Rating → Sales Only */}
      {variant === "sales" && (
        <div className="flex gap-1 text-yellow-400 text-sm mb-2">
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
          <FaStar size={20} />
        </div>
      )}

      {/* TITLE */}
      <h3 className="font-semibold text-gray-900 mb-1">
        {product.name}
      </h3>

      <p className="text-sm text-gray-500 mb-2">500g Pack</p>

      {/* PRICE */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-red-600 font-bold text-lg">
          ${product.price}
        </span>
        <span className="text-gray-400 line-through text-xs">
          $36.00
        </span>
      </div>

      {/* VARIANT LAYOUTS */}
      {variant === "popular" ? (
        <div className="flex justify-between items-center">
          <div className="flex border border-gray-300 rounded px-3 py-1 items-center gap-3">
            <span>1</span>
            <div className="flex flex-col text-[10px] leading-none">
              <button>▲</button>
              <button>▼</button>
            </div>
          </div>

          <button className="flex justify-center items-center gap-2 border border-[#79ad41] text-[#79ad41] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79ad41] hover:text-white transition">
            Add <IoCartOutline size={20} />
          </button>
        </div>
      ) : (
        <button className="flex justify-center items-center gap-2 w-full bg-[#79ad41] text-white py-2 rounded-lg font-bold hover:bg-[#2C3C28] transition">
          Add <IoCartOutline size={20} />
        </button>
      )}
    </div>
  );
}
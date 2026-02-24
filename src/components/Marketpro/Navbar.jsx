// import React from "react";
// import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineGridView } from "react-icons/md";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 lg:px-4 py-4 flex items-center justify-between gap-6">

//         {/* ================= LEFT - Browse Categories ================= */}
//         <div className="flex items-center gap-10">
//           <button className="hidden md:flex items-center gap-2 bg-[#2ABC79] text-white px-5 py-4 rounded-md font-medium hover:bg-green-600 transition">
//             <MdOutlineGridView size={18} />
//             Browse Categories
//             <FaChevronDown size={12} />
//           </button>
//         </div>

//         {/* ================= CENTER - MENU LINKS ================= */}
//         <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">

//           <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
//             Home <FaChevronDown size={10} />
//           </div>

//           <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
//             Shop <FaChevronDown size={10} />
//           </div>

//           <div className="relative flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
//             Pages <FaChevronDown size={10} />
//            <span className="absolute -top-4 left-6 bg-orange-500 text-white text-xs px-2 py-[2px] rounded animate-pulse">
//                 New
//               </span>
//           </div>

//                       <div className="relative flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
//               Vendors <FaChevronDown size={10} />
//               <span className="absolute -top-4 left-6 bg-purple-500 text-white text-xs px-2 py-[2px] rounded animate-pulse">
//                 New
//               </span>
//             </div>


//           <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
//             Blog <FaChevronDown size={10} />
//           </div>

//           <div className="cursor-pointer hover:text-[#0E7490]">
//             Contact Us
//           </div>

//         </div>

//         {/* ================= RIGHT - HELP SECTION ================= */}
//         <div className="flex items-center gap-3 text-sm text-gray-700">
//           <FaPhoneAlt size={20} className="text-[#0E7490]" />
//           <div className="hidden sm:flex flex-col leading-tight">
//             <span className="text-lg text-black">
//               Need any Help? call Us
//             </span>
//             <span className="font-bold text-lg text-[#0E7490]">
//               +(2) 871 382 023
//             </span>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

import React from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* ================= LEFT SIDE (Browse + Menu Together) ================= */}
        <div className="flex items-center gap-10">

          {/* Browse Categories */}
          <button className="hidden md:flex items-center gap-2 bg-[#2ABC79] text-white px-5 py-4 rounded-md font-medium hover:bg-[#23a66b] transition">
            <MdOutlineGridView size={18} />
            Browse Categories
            <FaChevronDown size={12} />
          </button>

          {/* Menu Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-[16px]">

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
              Home <FaChevronDown size={10} />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
              Shop <FaChevronDown size={10} />
            </div>

            <div className="relative flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
              Pages <FaChevronDown size={10} />
              <span className="absolute -top-8 left-6 text-[16px] bg-orange-500 text-white text-xs px-2 py-[2px] rounded animate-pulse">
                New
              </span>
            </div>

            <div className="relative flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
              Vendors <FaChevronDown size={10} />
              <span className="absolute -top-8 left-6 text-[16px] bg-purple-500 text-white text-xs px-2 py-[2px] rounded animate-pulse">
                New
              </span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0E7490]">
              Blog <FaChevronDown size={10} />
            </div>

            <div className="cursor-pointer hover:text-[#0E7490]">
              Contact Us
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <FaPhoneAlt size={20} className="text-[#0E7490]" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base text-black">
              Need any Help? call Us
            </span>
            <span className="font-bold text-lg text-[#0E7490]">
              +(2) 871 382 023
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}
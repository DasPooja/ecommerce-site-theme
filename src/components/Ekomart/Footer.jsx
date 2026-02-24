import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

import logo from "../../assets/logo-EkoMart.svg";
// import payment from "../assets/payment.png"; // optional if you add combined payment image

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#111] to-[#1a1a1a] text-white pt-20">

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COLUMN 1 */}
          <div>
            <img src={logo} alt="Ekomart Logo" className="mb-6 w-40" />

            <p className="text-gray-400 mb-6 leading-relaxed">
              What’s inside: New Arrivals, Exclusive Sales,
              News & More
            </p>

            {/* Newsletter */}
            <div className="flex bg-white rounded-md overflow-hidden mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
              <button className="bg-[#79ad41] px-4 flex items-center justify-center text-white">
                <FiArrowRight size={18} />
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-6 text-gray-400">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Stores</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">Delivery Information</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Support Center</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Shop Categories</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Information</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Nest Stories</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Need Help? / Contact Us
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex gap-4">
                <IoLocationOutline size={24} className="text-[#79ad41]" />
                <p>
                  258 Daniel Street, 2589 Phones Line
                  <br />
                  Berlin, Germany
                </p>
              </div>

              <div className="flex gap-4">
                <IoCallOutline size={24} className="text-[#79ad41]" />
                <div>
                  <p>Call us between 8:00 AM – 12PM</p>
                  <p className="text-[#79ad41] text-xl font-semibold">
                    +25896 3158 3228
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BsChatDots size={24} className="text-[#79ad41]" />
                <p>
                  Live Chat
                  <br />
                  Chat With an Experts
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-white text-sm">
            Copyright 2025 ©Ekomart. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-white font-bold">Payment Accepts:</span>
            {/* <img src={payment} alt="Payments" className="h-6" /> */}
          </div>

        </div>
      </div>

    </footer>
  );
}

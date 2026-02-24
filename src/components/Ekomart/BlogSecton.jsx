import React from "react";
import { FiFolder } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";

import blog1 from "../../assets/blogImg1.jpg";
import blog2 from "../../assets/blogImg2.jpg";
import blog3 from "../../assets/blogImg3.jpg";
import { BsClock } from "react-icons/bs";


const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Shion Fixation: Fueling Your Passion for All Things Stylish",
  },
  {
    id: 2,
    image: blog2,
    title: "Ashion Fixation: Fueling Your Passion for All Things Stylish",
  },
  {
    id: 3,
    image: blog3,
    title: "Fixation: Fueling Your Passion for All Things Stylish",
  },
];

export default function BlogSection() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-24">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Latest Blog Post Insights
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <BsClock size={18} />
                    <span>15 Sep, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiFolder size={18} />
                    <span>Modern Fashion</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug">
                  {blog.title}
                </h3>

                {/* Read Details */}
                <div className="flex items-center gap-3 text-gray-900 font-medium">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EAF3DF] text-[#79ad41]">
                    <LuPlus size={20} />
                  </span>
                  Read Details
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
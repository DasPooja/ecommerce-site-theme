import React from 'react';
import { LuPlus } from "react-icons/lu";
import discountImg1 from '../../assets/discountImg1.jpg'
import discountImg2 from '../../assets/discountImg2.jpg'
import discountImg3 from '../../assets/discountImg3.jpg'

function DiscountCard({ img, title, subtitle }) {
  return (
    <div className="relative rounded-lg overflow-hidden h-105">
      
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover bg-[#F7F9F4]"
      />

      {/* Overlay (very light, optional for readability) */}
      {/* <div className="absolute inset-0 bg-white/40"></div> */}

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="inline-block bg-[#dde7d2] text-[#629D23] px-4 py-2 rounded-md text-sm font-bold mb-4">
          Weekend Discount
        </div>

        <h4 className="text-2xl font-bold text-[#203225] leading-snug">
          {title}
        </h4>

        <p className="text-lg text-[#629D23]">
          {subtitle}
        </p>

        <div className="flex items-center gap-3 mt-6">
          <button className="w-8 h-8 rounded-full bg-[#629D23] text-white flex items-center justify-center text-xl">
            <LuPlus size={20}/>
          </button>
          <span className="font-bold text-[#203225]">
            Shop Now
          </span>
        </div>
      </div>
    </div>
  )
}

export default function DiscountSection() {
  const cards = [
    { img: discountImg1, title: 'Drink Fresh Corn Juice', subtitle: 'Good Taste', },
    { img: discountImg2, title: 'Organic Lemon Flavored Chips', subtitle: 'Banana Chips', },
    { img: discountImg3, title: 'Nozes Pecandera Brasil', subtitle: 'Chocolate Snacks', },
  ]

  return (
    <section className="container mx-auto px-24 py-4 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
            <DiscountCard key={i} {...c} /> 
        ))}
      </div>
    </section>
  )
}

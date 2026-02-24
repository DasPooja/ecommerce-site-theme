import React, { useState } from 'react';
import { CiCreditCard1 } from "react-icons/ci";
import { LuMapPinned } from "react-icons/lu";
import { BsEmojiSmile } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import BannerImg1 from '../../assets/BannerImg1.webp';
import BannerImg2 from '../../assets/BannerImg2.webp';

function BenefitsSection() {
  const benefits = [
    { icon: <CiCreditCard1 />, title: 'Installments Without Card', desc: 'Easy Payment Option' },
    { icon: <LuMapPinned />, title: 'Track Your Order Online', desc: 'Order Location Check' },
    { icon: <BsEmojiSmile/>, title: '100% Happy Customers', desc: 'Happy Customer Feedbacks' },
    { icon: <CiDeliveryTruck/>, title: 'Free Delivery From $70', desc: 'Home Delivery Available' },
  ]

  return (
    <section className="bg-gray-50 py-8 ml-6 px-12">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 whitespace-nowrap gap-20">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex justify-center items-center text-3xl text-[#629D23] rounded-full border border-[#629D23] w-12 h-12">{b.icon}</div>
              <div>
                <p className="font-bold text-lg text-gray-900">{b.title}</p>
                <p className="text-[16px] text-gray-400">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Banner() {
  const [slide, setSlide] = useState(0)

  const slides = [
    {
      image: BannerImg1,
      title: "Get up to 30% off on your first $150 purchase",
      subtitle: "Don't miss our amazing grocery deals",
      description: "We have prepared special discounts for you on grocery products. Don't miss these opportunities...",
    },
    {
      image: BannerImg2,
      title: "Get up to 10% off on your first $250 purchase",
      subtitle: "Check out our incredible deals today",
      description: "We have prepared special discounts for you on grocery products. Don't miss these opportunities...",
    },
  ]

  const current = slides[slide]

  return (
    <>
    <BenefitsSection />
      <section
        className="group relative bg-cover bg-center text-white h-[620px]"
        style={{
          backgroundImage: 
            `url(${current.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 "></div>

        {/* Left control (appears on hover) */}
        <button
          aria-label="Previous slide"
          onClick={() => setSlide(slide === 0 ? slides.length - 1 : slide - 1)}
          className="absolute left-21 top-[55%] -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-white/10 hover:bg-white text-white hover:text-[#79ad41] w-20 h-20 rounded-full flex items-center justify-center border border-white/20"
        >
          <IoArrowBackOutline size={22} />
        </button>

        {/* Right control (appears on hover) */}
        <button
          aria-label="Next slide"
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="absolute right-14 top-[55%] -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-white/10 hover:bg-white text-white hover:text-[#79ad41] w-20 h-20 rounded-full flex items-center justify-center border border-white/20"
        >
          <IoArrowForwardOutline size={22} />
        </button>

        <div className="container mx-auto px-24 relative z-10 h-full flex items-center">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <div className="flex-1 max-w-2xl">
              <p className="text-[#EABC5E] font-semibold text-[16px] mb-4">{current.title}</p>
              <h2 className="text-4xl md:text-6xl font-semibold mb-4 leading-tight">{current.subtitle}</h2>
              <p className="text-gray-100 text-base mb-6">{current.description}</p>

              <div className="flex gap-3">
                <button className="flex justify-center items-center gap-2 bg-[#629D23] text-white px-6 py-3 rounded-3xl  hover:bg-[#2c3c28]">
                  <span className='font-bold'>Shop Now</span> <GoArrowRight size={20}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

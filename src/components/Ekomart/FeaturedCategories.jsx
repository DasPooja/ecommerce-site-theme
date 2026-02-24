import React, { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import organicVeges from '../../assets/organicVeges.png'

function CategoryCard({ item }) {
  return (
    <div className="aspect-square border border-gray-200 hover:border-[#629D23] transition-colors rounded-md overflow-hidden bg-white">
      <div className="flex flex-col h-full items-center justify-between p-4">
        <div className="flex-1 flex items-center justify-center w-full">
          <img src={organicVeges} alt="Organic Vegetable" className="max-h-32 object-contain" />
        </div>
        <div className="w-full text-center text-sm font-semibold text-gray-800">Organic Vegetable</div>
      </div>
    </div>
  )
}

export default function FeaturedCategories({ items = [] }) {
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(7)

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w < 768) setPerPage(3)
      else if (w < 1024) setPerPage(5)
      else setPerPage(7)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.max(1, Math.ceil(items.length / perPage))

  useEffect(() => {
    if (page >= totalPages) setPage(0)
  }, [perPage, totalPages])

  const visible = items.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="container mx-auto px-24 py-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-bold text-[#212529]">Featured Categories</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPage(p => (p - 1 + totalPages) % totalPages)}
            className="w-9 h-9 rounded-md border border-[#629D23] text-black flex items-center justify-center hover:bg-[#629D23] hover:text-white"
            aria-label="previous"
          >
            <IoChevronBackOutline size={20} />
          </button>
          <button
            onClick={() => setPage(p => (p + 1) % totalPages)}
            className="w-9 h-9 rounded-md border border-[#629D23] text-black flex items-center justify-center hover:bg-[#629D23] hover:text-white"
            aria-label="next"
          >
            <IoChevronForwardOutline size={20}/>
          </button>
        </div>
      </div>

      <div className="bg-[#F5F6F7] p-6 rounded-md">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {visible.map((it, idx) => (
            <div key={idx} className="p-1">
              <CategoryCard item={it} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

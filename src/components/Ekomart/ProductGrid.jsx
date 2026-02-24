import React, {useState} from "react";
import ProductCard from "../Ekomart/ProductCard";

export default function ProductGrid({
  title,
  products,
  tabs = [],
  variant = "popular",
}) {
   const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="bg-[#F5F5F5] py-14 px-24">
      <div className="container mx-auto px-2">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          {tabs.length > 0 && (
            <div className="flex gap-4 text-sm font-medium">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                    onClick={() => setActiveTab(tab)}
                   className={`px-4 py-2 transition ${
          activeTab === tab
            ? variant === "sales"
              ? "bg-[#79ad41] text-white rounded-full"
              : "bg-gray-200 text-black rounded-md"
            : "text-gray-700 hover:text-[#79ad41]"
        }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* GRID */}
        <div className={`grid gap-4 ${
          variant === "popular"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
        }`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


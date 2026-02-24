import React from 'react'
import Header from '../../components/Ekomart/Header'
import Banner from '../../components/Ekomart/Banner'
import ProductGrid from '../../components/Ekomart/ProductGrid'
import FeaturedCategories from '../../components/Ekomart/FeaturedCategories'
import DiscountSection from '../../components/Ekomart/DiscountSection'
import BlogSection from '../../components/Ekomart/BlogSecton'
import Footer from '../../components/Ekomart/Footer'
import ScrollTopButton from '../../components/Ekomart/ScrollTopButton'

const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: 'High quality organic product',
  price: (9.99 + i).toFixed(2),
  image: 'https://via.placeholder.com/200?text=Product',
}))

export default function Ekomart() {
  return (
    <div>
      <Header title="EKOMART" />
      <Banner />

      <FeaturedCategories items={sampleProducts} />
      <DiscountSection />
      <ProductGrid
        title="Popular Products"
        products={sampleProducts.slice(0, 4)}
        tabs={["Frozen Foods", "Diet Foods", "Healthy Foods", "Vitamin Items"]}
        variant="popular"
      />

      <ProductGrid
        title="Don't miss this week's sales"
        products={sampleProducts.slice(0, 5)}
        tabs={["Frozen Foods", "Diet Foods", "Healthy Foods", "Vitamin Items"]}
        variant="sales"
      />

      <ProductGrid
        title="Don't miss this week's sales"
        products={sampleProducts.slice(0, 5)}
        tabs={["All", "Baking material", "Milks & Dairies", "Vegetable"]}
        variant="sales"
      />
     <BlogSection/>
     <Footer/>
     <ScrollTopButton/>
    </div>
  )
}

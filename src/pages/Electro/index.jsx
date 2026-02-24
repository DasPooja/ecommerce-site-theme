import React from 'react'
import Header from '../../components/Ekomart/Header'
import Footer from '../../components/Ekomart/Footer'
import Banner from '../../components/Ekomart/Banner'

export default function Electro() {
  return (
    <div>
      <Header title="Electro" />
      <Banner title="Electro — Electronics store" subtitle="Electro layout module" />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Electro (work in progress)</h2>
        <p className="text-gray-600">This module will replicate the Electro theme layout and components.</p>
      </section>

      <Footer />
    </div>
  )
}

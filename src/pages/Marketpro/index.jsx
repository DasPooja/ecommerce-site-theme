import React from "react";
import TopBar from "../../components/Marketpro/TopBar";
import Header from "../../components/Marketpro/Header";
import Navbar from "../../components/Marketpro/NavBar";


export default function Marketpro() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <TopBar />
      <Header />
      <Navbar />
    </div>
  );
}
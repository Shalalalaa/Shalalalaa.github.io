"use client"
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const portfolioItems = [
  {
    title: "Project One",
    description: "NFTs and the metaverse are the future, but investing in the space isn’t easy. We make it simple.",
    stats: { potential: "700+", marketCap: "$570.24M", investors: "6,297" },
    image: "https://via.placeholder.com/500",
  },
  {
    title: "Project Two",
    description: "Empowering creators through blockchain technology and decentralized platforms.",
    stats: { potential: "500+", marketCap: "$320.50M", investors: "4,120" },
    image: "https://via.placeholder.com/500",
  },
  {
    title: "Project Three",
    description: "Revolutionizing digital ownership and virtual experiences worldwide.",
    stats: { potential: "1,000+", marketCap: "$1B", investors: "10,000" },
    image: "https://via.placeholder.com/500",
  },
];

const PortfolioCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-[#1f1f1f] rounded-lg shadow-lg">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextSlide} className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600">
          <FaArrowRight />
        </button>
      </div>

      <div className="flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl text-white font-bold">{portfolioItems[currentIndex].title}</h2>
          <p className="text-gray-300 mt-4">{portfolioItems[currentIndex].description}</p>
          <div className="mt-6">
            <span className="text-green-400 font-semibold">Potential Projects: {portfolioItems[currentIndex].stats.potential}</span>
            <span className="text-yellow-400 font-semibold ml-4">Market Cap: {portfolioItems[currentIndex].stats.marketCap}</span>
            <span className="text-red-400 font-semibold ml-4">Investors: {portfolioItems[currentIndex].stats.investors}</span>
          </div>
          <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Learn More
          </button>
        </div>

        <div className="w-1/2">
          <img
            src={portfolioItems[currentIndex].image}
            alt={portfolioItems[currentIndex].title}
            className="w-full h-auto rounded-lg transform transition duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

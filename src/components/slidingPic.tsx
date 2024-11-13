"use client";

import { useState } from "react";
export const dynamic = "force-dynamic";

export default function SliderImage() {
  const [activeSlide, setActiveSlide] = useState(0); // Tracks the active slide

  const slides = [
    "/catalog/Catalog_homepage/sci-fi-fantasy-high-gloss-deck.webp",
    "/catalog/Catalog_homepage/R43_0003_MOLLY-QUILTED.webp",
    "/catalog/Catalog_homepage/R_42_0014_WALLBOARDS-SQUIGGLE_c3bf6ce4-3afe-4275-bbc7-d8b727f03f8e.webp",
    "/catalog/Catalog_homepage/Polar-Skate-Co-F24-HG-David-Stenstrom-Tape-Panther-Popsicle01.webp",
    "/catalog/Catalog_homepage/hockey-onyx-ii-deck-01.webp",
  ];

  // Go to the previous slide
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Go to the next slide
  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Go to a specific slide by its index
  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setActiveSlide(index);
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-6 h-1 rounded-[10px] ${
              activeSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={activeSlide === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)} // Go to specific slide on click
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

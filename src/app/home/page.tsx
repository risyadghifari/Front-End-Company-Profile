"use client";

import VideoPlayer from "@/components/background-video"; // Ensure the path is correct
import { Inter_Tight } from 'next/font/google';
import { Inter } from "next/font/google";
import Image from "next/image";
import FadeInSection from "@/components/animated";
import React from "react";
import SlidingText from "@/components/sliding-text";
import SliderImage from "@/components/slidingPic";
import FadeInSections from "@/components/animated2";

const inter = Inter_Tight({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

const interMedium = Inter({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
});

const interBold = Inter({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
});

const interItalic = Inter({
  subsets: ['latin'],
  weight: '900',
  display: 'swap',
  style: 'italic'
});

export default function HomePage() {
  return (
    <div className="bg-neutral-50">
      <VideoPlayer />

      {/* Section 1 */}
      <div
        className={`w-full h-auto relative text-white p-6 sm:p-[50px] bg-black flex flex-col sm:flex-row justify-end px-6 sm:px-24 overflow-hidden`}
      >
        <div className="flex-col sm:w-1/3 space-y-4 sm:space-y-8 mr-[80px]">
          <h5
            className={`${interItalic.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[20px]`}
          >
            ABOUT THE BERRICS
          </h5>

          <p
            className={`${interMedium.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]`}
          >
            The Berrics is a private indoor skatepark owned by professional skateboarders Steve Berra and Eric Koston. It is also a website providing content filmed in the skatepark, as well as other skateboard-related media.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={`w-full h-auto relative text-white p-6 sm:p-[50px] bg-black flex flex-col sm:flex-row justify-end px-6 sm:px-24 overflow-hidden`}
      >
        <div className="flex-col sm:w-1/3 space-y-4 sm:space-y-8 mr-[80px]">
          <h5
            className={`${interItalic.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[20px]`}
          >
            COMPANY OVERVIEW
          </h5>

          <p
            className={`${interMedium.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18x]`}
          >
            Berra and Koston both purchased a building for the skateboarding facility with their own funds; one of the key initial goals for the Berrics facility was to provide a setting where skateboarders could practice their tricks to avoid spending that time in street-based environments in California, where skateboarding is illegal in most spaces.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-7">
            <p
              className={`${interMedium.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]`}
            >
              Optimal Terrain
            </p>
            <p
              className={`${interMedium.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]`}
            >
              Rocky | Steep | Muddy | Mix
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className={`${inter.className} w-full h-auto relative text-white p-6 sm:p-[50px] bg-black bg-cover bg-center`}
        style={{
          backgroundImage: 'url(/linoleum-creative-collective-i3b8zJ48o0M-unsplash.png)',
        }}
      >
        <div className="flex-col space-y-1 sm:space-y-4 ml-20 sm:w-1/3">
          <h5 className={`${interItalic.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[20px]`}>
            Testimonials
          </h5>
          <h1 className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[30px]">
          Testimonials from skaters, cities and skatepark enthusiasts, alike.
          </h1>
        </div>
        <div className="flex justify-center mt-6 sm:mt-0">
          <SlidingText />
        </div>
      </div>

      {/* Product Section */}
      <div
        className="w-full h-auto mt-[80px] relative text-black sm:p-[80px] items-center justify-center flex flex-col sm:flex-row space-x-4 sm:space-x-20 space-y-6 sm:space-y-0"
      >
        <div className="sm:w-1/4 space-y-4 sm:space-y-8">
        <FadeInSections>
          <h5 className={`${interMedium.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[16px] pb-4`}>
            THE PRODUCTS
          </h5>
          <h1 className={`${interItalic.className} text-[22px] sm:text-[30px] md:text-[36px] lg:text-[25px]`}>
          Featured Footwear
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[16px]">
            Any and all new arrivals will appear here and new products are added daily so be sure to bookmark us.
          </p>
          </FadeInSections>
        </div>

      <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <FadeInSection>
            <SliderImage />
          </FadeInSection>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="mt-[8vw] w-full h-auto relative text-black p-6 sm:p-[50px] flex flex-col sm:flex-row justify-end space-x-40 space-y-6 sm:space-y-0"
      >
        <div className="sm:w-1/5 space-y-4 sm:space-y-8">
    <div>
          <h5 className={`${interBold.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[16px]`}>
            A BRIEF HISTORY OF BERRICS:
          </h5>
          <h1 className={`${interItalic.className} text-[22px] sm:text-[30px] md:text-[36px] lg:text-[27px]`}>
          1999 - 2003
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[16px]">
            Any and all new arrivals will appear here and new products are added daily so be sure to bookmark us.
          </p>
        </div>

        <div>
          <h5 className={`${interMedium.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[16px]`}>
         
          </h5>
          <h1 className={`${interItalic.className} text-[22px] sm:text-[30px] md:text-[36px] lg:text-[27px]`}>
          2004 - 2010
          </h1>
         
          <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[16px]">
            Any and all new arrivals will appear here and new products are added daily so be sure to bookmark us.
          </p>
          
        </div>

        <div>
          <h5 className={`${interMedium.className} text-[16px] sm:text-[20px] md:text-[22px] lg:text-[16px]`}>
         
          </h5>
          <h1 className={`${interItalic.className} text-[22px] sm:text-[30px] md:text-[36px] lg:text-[27px]`}>
          2011 - 2015
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[16px]">
            Any and all new arrivals will appear here and new products are added daily so be sure to bookmark us.
          </p>
        </div>
        </div>
        
        
        <div className="overflow-hidden sm:w-1/4 space-y-4 sm:space-y-8">
          <FadeInSection>
            <Image
              alt="Skateboard park image 1"
              src="/adam-barclay-hUwwtSxWd_s-unsplash.png"
              width={450}
              height={300}
              className="w-full h-auto"
            />
          </FadeInSection>
          <FadeInSection>
            <Image
              alt="Skateboard park image 2"
              src="/adam-barclay-hUwwtSxWd_s-unsplash_2.png"
              width={300}
              height={200}
              className="h-auto"
            />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const VideoPlayer = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 300); // Adjust 300 to control when the black background starts showing

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div
        className="fixed w-screen h-screen overflow-auto z-[2] left-0 top-0 brightness-50 transition-opacity duration-300"
        style={{ opacity }}
      >
        <video
          className="w-full h-full object-cover bg-black"
          autoPlay
          muted
          loop
        >
          <source
            src="/vlc-record-2024-11-03-17h56m27s-IF YOU'RE WATCHING THIS, WE HAD FUN. A skateboard video with Tyler and Levi..mp4-.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Text Overlay */}
      <div
        className={`${inter.className} relative text-white z-[3] text-center sm:text-right px-4 sm:px-24 py-6 sm:py-[20px]`}
      >
        <h1 className="text-[24px] sm:text-[40px] mt-[30vw] sm:mt-[18vw]">
          But we at the Berrics believe
        </h1>
        <h1 className="text-[24px] sm:text-[40px]">that life was made to live out of,</h1>
        <h1 className="text-[24px] sm:text-[40px]">not die out of.</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;

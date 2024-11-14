"use client";

import { usePathname } from "next/navigation"; // usePathname instead of useRouter
import { useEffect, useState } from "react";
import { Inter_Tight } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";
import React from "react";

const inter = Inter_Tight({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [navbarColor, setNavbarColor] = useState('bg-transparent'); // Default navbar color

  const pathname = usePathname(); // Access pathname directly
  const [menuOpen, setMenuOpen] = React.useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40); // Change to the scroll value you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/home/product') {
      setNavbarColor('bg-black'); // Example: Blue color on /product page
    } else if (pathname === '/home/about') {
      setNavbarColor('bg-black'); // Example: Green color on /about page
    } else if (pathname === '/home/team') {
      setNavbarColor('bg-black'); // Example: Red color on /contact page
    } else {
      setNavbarColor(isSolid ? 'bg-black' : 'bg-transparent'); // Default color
    }
  }, [pathname, isSolid]); // Dependency on pathname and isSolid state

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-[50] transition-all duration-300 ${
    navbarColor
  } ${isSolid ? "text-white shadow-md" : "text-white"}`}
>
  <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
    {/* Logo */}
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/logo/Berrics-logo-04.png"
        alt="Logo"
        width={100}
        height={50}
        className="w-35"
      />
    </Link>

    {/* Burger Menu Button */}
    <button
      className="md:hidden flex items-center justify-center p-2 w-10 h-10 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
      onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu state
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    {/* Navigation Links */}
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } absolute top-16 left-0 w-full bg-black text-white md:relative md:top-0 md:flex md:items-center md:justify-end md:space-x-10 md:w-auto md:bg-transparent`}
    >
      <div className={`${inter.className} flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10 text-[12px] font-semibold p-4 md:p-0`}>
        <Link href="/" className="hover:text-black hover:bg-slate-50 p-2">
          Home
        </Link>
        <Link href="/home/about" className="hover:text-black hover:bg-slate-50 p-2">
          About
        </Link>
        <Link href="/home/product" className="hover:text-black hover:bg-slate-50 p-2">
          Shop
        </Link>
        <Link href="/home/team" className="hover:text-black hover:bg-slate-50 p-2">
          Team
        </Link>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

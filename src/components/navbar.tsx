"use client";

import { usePathname } from "next/navigation"; // usePathname instead of useRouter
import { useEffect, useState } from "react";
import { Inter_Tight } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

const inter = Inter_Tight({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
});

const Navbar = () => {
  const [isSolid, setIsSolid] = useState(false);
  const [navbarColor, setNavbarColor] = useState('bg-transparent'); // Default navbar color

  const pathname = usePathname(); // Access pathname directly

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40); // Change to the scroll value you want
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === '/product') {
      setNavbarColor('bg-black'); // Example: Blue color on /product page
    } else if (pathname === '/about') {
      setNavbarColor('bg-black'); // Example: Green color on /about page
    } else if (pathname === '/team') {
      setNavbarColor('bg-black'); // Example: Red color on /contact page
    } else {
      setNavbarColor(isSolid ? 'bg-black' : 'bg-transparent'); // Default color
    }
  }, [pathname, isSolid]); // Dependency on pathname and isSolid state

  return (
    <nav
      className={`fixed top-0 m-0 p-0 left-0 w-full z-[50] transition-all duration-300 ${
        navbarColor
      } ${isSolid ? "text-white shadow-md" : "text-white"}`}
    >
      <div className={`${inter.className} max-w-7xl mx-auto px-4 py-4 flex items-center justify-between`}>
        <Link href="/">
          <Image src="/logo/Berrics-logo-04.png" alt="Logo" width={100} height={50} className="w-35" />
        </Link>
        <div className="space-x-10 text-[15px] font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Shop</Link>
          <Link href="/team">Team</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 h-[72px] w-full flex justify-between items-center px-4 md:px-8">
      {/* Left Side: Logo and Name */}
      <Link
        href="/"
        className="flex items-center gap-1 md:gap-2 whitespace-nowrap"
      >
        <Image
          src="/landingPageIcons/wired-lineal-1702-electric-teapot.gif"
          alt="Logo"
          width={50} // Logo size increased
          height={50} // Logo size increased
          layout="intrinsic"
          className="rounded-full"
        />
        <span className="text-white text-lg md:text-xl font-semibold">
          Coffee For Everyone
        </span>
      </Link>

      {/* Right Side: Login Button (Only on larger screens) */}
      <div className="flex gap-2 md:gap-4">
        <Link href="/login">
          <button className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

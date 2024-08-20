"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <header className="bg-gray-900 h-[72px] w-full flex justify-between items-center px-4 md:px-8 relative">
      {/* Left Side: Logo and Name */}
      <Link href="/" className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
        <Image
          src="/landingPageIcons/wired-lineal-1702-electric-teapot.gif"
          alt="Logo"
          width={50}
          height={50}
          layout="intrinsic"
          className="rounded-full"
        />
        <span className="text-white text-lg md:text-xl font-semibold">Coffee For Everyone</span>
      </Link>

      {/* Right Side: Conditional Rendering Based on User Authentication */}
      <div className="flex gap-2 md:gap-4 relative">
        {user ? (
          <>
            <button
              ref={buttonRef}
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              {user.name}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              ref={dropdownRef}
              id="dropdown"
              className={`z-10 ${isDropdownOpen ? "block" : "hidden"} absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 max-h-60 overflow-y-auto dark:bg-gray-700`}
              style={{ top: "calc(100% + 8px)" }} // Adjusts the gap between the button and the dropdown
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 md:px-4 py-2 text-sm md:text-base">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Side: Content */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Coffee For Everyone</h2>
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Coffee For Everyone. All rights reserved. We strive to bring you the
            best content and services. Stay tuned for updates!
          </p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/nikhil_kumar_023/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition duration-300"
          >
            <Image
              src="/followUp/instagram.gif"
              alt="Facebook"
              width={150}
              height={150}
              layout="intrinsic"
              priority
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

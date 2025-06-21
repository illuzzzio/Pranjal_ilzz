"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import the Link component

const Navbar = () => {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo and Name */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/logo.gif"
            alt="logo"
            width={60}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-3 hidden md:block text-gray-300 text-lg">
            Pranjal_iLLuzzzi0
          </span>
        </a>

        {/* Center Navigation */}
        <div className="flex items-center justify-center md:mr-20">
          <div className="flex gap-6 border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 text-sm backdrop-blur-sm">
            <Link href="/about" className="hover:text-purple-400 transition duration-200">
              About me
            </Link>
            <Link href="/" className="hover:text-purple-400 transition duration-200">
              Home
            </Link>
              <Link href="https://ezzhire.vercel.app/" className="hover:text-purple-400 transition duration-200">
              EzzHire
            </Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-4">
          <button
            onClick={() => handleRedirect("https://discord.com/channels/@me")}
            className="transition transform hover:scale-110"
          >
            <Image
              src="/discord.svg" // Your discord icon
              alt="discord"
              width={28}
              height={28}
              className="rounded-full"
            />
          </button>
          <button
            onClick={() => handleRedirect("https://www.instagram.com/pranjal_illuzzio/")}
            className="transition transform hover:scale-110"
          >
            <Image
              src="/instagram.svg" // Your Instagram icon (replace with the correct icon path)
              alt="Instagram"
              width={28}
              height={28}
            />
          </button>
          <button
            onClick={() => handleRedirect("https://steamcommunity.com/profiles/76561199001309804/")}
            className="transition transform hover:scale-110"
          >
            <Image
              src="/hola.svg" // Your Steam icon (replace with the correct icon path)
              alt="Steam"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

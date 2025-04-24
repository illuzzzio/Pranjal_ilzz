"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Github
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}Profile
          </span>
        </motion.div>
      </div>

      {/* GitHub Clickable Logo */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <a
          href="https://github.com/illuzzzio" // <-- Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group cursor-pointer w-auto h-auto"
        >
          <Image
            src="/gitwhite.png"
            alt="GitHub Logo"
            width={70}
            height={70}
            className="w-[70px] transition-all duration-200 group-hover:scale-110"
          />
        </a>
      </div>

      {/* Bottom Text */}
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;

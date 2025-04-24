"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 mt-32 w-full z-[20]"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-5 justify-center w-full max-w-[700px] text-start">
        {/* Welcome Tag Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-2 py-[6px] px-[10px] max-w-fit border border-[#7042f88b] bg-[#100d25]/70 backdrop-blur-md rounded-full text-white shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4" />
          <h1 className="text-[12px] font-medium">Welcome to my portfolio</h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Welcome
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse">
            {" "}to my{" "}
          </span>
          Portfolio
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md sm:text-lg text-gray-300 my-4 max-w-[90%] hover:text-white transition-colors duration-200"
        >
          I&apos;m a first-year student at VIT Chennai (B.Tech – CSE AIML) and a
          Full Stack Software Engineer with experience in web development, C++, and
          Machine Learning. Check out my projects and skills!
        </motion.p>

        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://www.linkedin.com/in/pranjal-malhotra-66a344206/" // Replace with your LinkedIn URL
          target="_blank" // Opens in a new tab
          className="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:from-purple-700 hover:to-cyan-600 hover:scale-105 transition-all duration-300 w-fit shadow-md cursor-pointer"
        >
          View Linkedin
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[600px] mt-12 lg:mt-0 flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work Icons"
          height={500}
          width={500}
          className="hover:scale-105 transition-transform duration-300 drop-shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

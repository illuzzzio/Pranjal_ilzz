"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/fret.png"
          title="NEFRON - Web Assistant"
          description="A web assistant made with Clerk auth and Next.js. It can navigate you to various sites using speech recognition features. Visit my GitHub for checking them out."
        />

        <ProjectCard
          src="/helion.png"
          title="Hellion_1_Frontend"
          description="I'm creating a chatbot in Next.js using MongoDB, React, and APIs. Currently, only the frontend is ready but the UI is stunning. Visit my GitHub for checking them out."
        />

        <ProjectCard
          src="/image.png"
          title="FREXTRIM"
          description="A Python tool to extract audio from video, extract frames, and trim audio. For more details, visit my GitHub for checking them out."
        />

        <ProjectCard
          src="/arduino.png"
          title="Radar using Arduino IDE"
          description="Radar tracking system built with hardware, C++, and Java (Processing). Visit my GitHub for checking them out."
        />

        <ProjectCard
          src="/lg.png"
          title="The Living God"
          description="A pure C++ terminal game with ASCII graphics and puzzles. Unique and creative. Visit my GitHub for checking them out."
        />

        <ProjectCard
          src="/MDC.png"
          title="Dental Clinic Appointment App"
          description="A web app designed by me for Dr. Sidharth Malhotra's dental clinic, made using Firebase, Next.js, and Tailwind CSS. Patients can log in, view services, and book appointments. Doctors have their own login to approve or reject requests. It also features a dental assistant powered by Gemini AI's API."
        />

        <ProjectCard
          src="/hire.png"
          title="EzzHire"
          description="An App made by me , in which you can take mock interview sessions and for each interview you have to purchase credits with my integrated razorpay Gateway, the tech stack used in it is Next.js, tailwind css, gemini api, vapi SDK, pdfjs etc"
        />

        <ProjectCard
          src="/vc.png"
          title="Vision Craft Studio"
          description="Vision Craft Studio is an app offering features like AI object removal, themes, color editing, face merge, and more—powered by the Gemini API. Authentication and payment features are under development. Currently, users can enjoy 60 free credits to explore."
        />
      </div>
    </div>
  );
};

export default Projects;

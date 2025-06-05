"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
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
          description="An webapp designed by me for Dr Sidharth Malhotra's dental clinic. made using firebase, Next.js and tailwind. The app can help patient to view services at the clinic, and even book appointments. patient has to login via patient login, and when the doctor is logged in via his own specific credintials, he can reject or approve the appoinntent requests.Also there is a Dental assistant created on Gemini AI,s api, which can ask various questions related to dental Procedures and other dental terms..."
        />
                <ProjectCard
          src="/vc.png"
          title="Vision Craft Studio"
          description="Vision Craft studios is an app with features like ai object removal ,theme , colours , face merge and many more all powered by gemini api.Its not fully ready yet, the authentication part is still pending and the payment method is not powerfull yet , cause i have integrated my qr code and for verification an ai tool that verifies screenshot with a certain time limit , which means its not full ready yet, so go and enjoy free 60 credits and give my app a try :)...."
        />
      </div>
    </div>
  );
};

export default Projects;

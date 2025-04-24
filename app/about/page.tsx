// app/about/page.tsx
"use client"
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center text-white bg-[#030014] backdrop-blur-md">
      {/* About Me Header */}
      <div className="text-center mt-16">
        <h1 className="text-5xl font-bold text-purple-400">About Me</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I am a B.Tech student at VIT Chennai, pursuing Computer Science with a focus on AI and ML. I am passionate about software development and exploring new technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full mt-16 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-purple-400">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Boxes */}
          <SkillCard title="Next.js" />
          <SkillCard title="JavaScript" />
          <SkillCard title="Python" />
          <SkillCard title="OpenCV" />
          <SkillCard title="Machine Learning" />
          <SkillCard title="C++" />
          <SkillCard title="Arduino IDE" />
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="w-full mt-16 text-center">
        <h2 className="text-3xl font-semibold text-purple-400">Hobbies</h2>
        <div className="mt-8 text-lg max-w-2xl mx-auto">
          <ul className="list-disc list-inside">
            <li>Playing Video Games</li>
            <li>Solved Rubik's Cube</li>
            <li>Cricket</li>
            <li>Coding</li>
            <li>Game Development</li>
          </ul>
        </div>
      </div>

      {/* Resume Section */}
      
      </div>
    
  );
};

// Reusable Skill Card Component
const SkillCard = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-[#7042f861] bg-[#0300145e] rounded-lg backdrop-blur-md text-center">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
  );
};

export default About;

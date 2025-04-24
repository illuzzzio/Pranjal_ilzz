import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description }) => {
  return (
    <div className="w-full transition transform hover:scale-105">
      <div className="bg-[#0300145e] p-6 rounded-xl shadow-md hover:shadow-2xl backdrop-blur-md h-full flex flex-col justify-start">
        <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h3 className="text-xl font-bold text-white mt-4">
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import Image from "next/image";

interface Project {
  id: number;
  image: string;
  url: string;
  codeUrl: string;
  techStack: {
    src: string;
    alt: string;
  }[];
}

interface ProjectProp {
  project: Project;
}

export default function TechStack({ project }: ProjectProp) {
  return (
    <div className="flex items-center">
      {project.techStack.map((tech, index) => (
        <div
          key={index}
          className={`w-7 border h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-[#0b0f20] flex items-center justify-center ${
            index !== 0 ? "-ml-2.5" : ""
          }`}
        >
          <Image
            src={tech.src}
            alt={tech.alt}
            width={24}
            height={24}
            className="object-contain p-0.5"
          />
        </div>
      ))}
    </div>
  );
}

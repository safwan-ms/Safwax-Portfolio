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
          className={`group/tech relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-base-content/5 border border-base-content/8 flex items-center justify-center hover:bg-base-content/10 hover:border-base-content/15 hover:scale-110 hover:z-10 transition-all duration-300 ${
            index !== 0 ? "-ml-1.5" : ""
          }`}
          title={tech.alt}
        >
          <Image
            src={tech.src}
            alt={tech.alt}
            width={18}
            height={18}
            className="object-contain opacity-70 group-hover/tech:opacity-100 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

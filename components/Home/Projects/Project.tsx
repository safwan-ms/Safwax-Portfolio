"use client";
import { projectData } from "@/Data/data";
import SectionHeading from "../../Helper/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const Project = () => {
  return (
    <div className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-center">
        {projectData.map((project) => {
          return (
            <Tilt
              key={project.id}
              className="bg-gradient-to-br from-info-content to-neutral p-6 rounded-lg"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </Link>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

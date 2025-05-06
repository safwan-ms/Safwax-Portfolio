"use client";
import { projectData } from "@/Data/data";
import SectionHeading from "../../Helper/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import TechStack from "./TechStack";

const Project = () => {
  return (
    <div
      className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-center">
        {projectData.map((project) => {
          return (
            <Tilt
              key={project.id}
              className="bg-gradient-to-br from-info-content to-neutral p-6 rounded-lg"
            >
              <div>
                <Link href={project.url} target="_blank">
                  <Image
                    src={project.image}
                    alt="project"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                </Link>

                <div className="flex justify-between  pt-4">
                  <div className="flex justify-start">
                    <TechStack project={project} />
                  </div>
                  <div>
                    <button className="btn mr-1.5  hover:btn-primary/50 p-0.5 px-1 py-0.5 btn-primary ">
                      <Link href={project.url} target="_blank" className="flex">
                        <FaEye size={15} />
                      </Link>
                    </button>
                    <button className="btn p-0.5 px-1 btn-secondary hover:btn-secondary/50">
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        className="flex"
                      >
                        <FaCode size={15} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

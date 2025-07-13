"use client";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import TechStack from "./TechStack";
import Tilt from "react-parallax-tilt";

interface Project {
  id: number;
  image: string;
  url: string;
  codeUrl: string;
  title: string;
  techStack: {
    src: string;
    alt: string;
  }[];
}
interface ProjectProp {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectProp) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Tilt key={project.id}>
        <div className="bg-gradient-to-br from-info-content to-neutral p-4 rounded-lg">
          <Link href={project.url} target="_blank">
            <Image
              src={project.image}
              alt="project"
              width={400}
              height={200}
              className="object-cover object-top h-[300px] lg:h-[400px] rounded-md"
            />
          </Link>
          <p className="font-bold text-white mt-3 mx-1">{project.title}</p>

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
                <Link href={project.codeUrl} target="_blank" className="flex">
                  <FaCode size={15} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;

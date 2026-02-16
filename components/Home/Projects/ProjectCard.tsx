"use client";
import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import TechStack from "./TechStack";

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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ProjectCard = ({ project }: ProjectProp) => {
  return (
    <motion.div variants={itemVariants}>
      <div className="group relative rounded-2xl bg-base-content/[0.02] border border-base-content/5 overflow-hidden hover:border-base-content/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
        {/* ── Image Section ── */}
        <div className="relative overflow-hidden">
          <Link href={project.url} target="_blank">
            <div className="relative h-[240px] md:h-[280px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </Link>

          {/* Floating action buttons on image */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Link
              href={project.url}
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              title="Live Preview"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={project.codeUrl}
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              title="Source Code"
            >
              <FaCode className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Content Section ── */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-base font-semibold text-base-content tracking-tight group-hover:text-[#f72585] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Divider */}
          <div className="my-4 h-px bg-base-content/5" />

          {/* Footer: Tech + Links */}
          <div className="flex items-center justify-between">
            {/* Tech stack */}
            <TechStack project={project} />

            {/* Action links (always visible, smaller) */}
            <div className="flex gap-2">
              <Link
                href={project.url}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-base-content/60 bg-base-content/5 hover:bg-[#f72585]/10 hover:text-[#f72585] border border-base-content/5 hover:border-[#f72585]/20 transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
                Live
              </Link>
              <Link
                href={project.codeUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-base-content/60 bg-base-content/5 hover:bg-[#7209b7]/10 hover:text-[#7209b7] border border-base-content/5 hover:border-[#7209b7]/20 transition-all duration-300"
              >
                <FaCode className="w-2.5 h-2.5" />
                Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

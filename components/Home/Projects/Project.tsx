"use client";

import { projectData } from "@/Data/data";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

/* ─── Animation Variants ─── */
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Project = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ─── Scroll parallax ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const gridY = useTransform(scrollYProgress, [0, 1], [50, -40]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-base-100 py-24 md:py-32 overflow-hidden"
      id="projects"
    >
      {/* ── Parallax Background Layer ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#f72585]/7 blur-3xl" />
        <div className="absolute -bottom-20 -right-32 w-[350px] h-[350px] rounded-full bg-[#7209b7]/6 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <div className="relative z-10 w-[90%] xl:w-[80%] max-w-7xl mx-auto">
        {/* ── Section Header with parallax ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ y: headerY }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7209b7]" />
            <span className="text-xs font-medium text-base-content/60 uppercase tracking-[0.15em]">
              Portfolio
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content tracking-tight">
            Featured{" "}
            <span className="bg-linear-to-r from-[#f72585] via-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-base-content/40 max-w-lg mx-auto">
            A collection of applications I&apos;ve built with modern
            technologies
          </p>
        </motion.div>

        {/* ── Project Grid with parallax ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ y: gridY }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectData.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

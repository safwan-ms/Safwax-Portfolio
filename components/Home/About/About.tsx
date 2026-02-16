"use client";

import { aboutInfo } from "@/Data/data";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { useRef, useCallback } from "react";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";

const skills = [
  {
    icon: FaCode,
    label: "Frontend Development",
    color: "#f72585",
    description: "React, Next.js, Tailwind CSS & modern UI frameworks",
  },
  {
    icon: FaServer,
    label: "Backend Development",
    color: "#7209b7",
    description: "Node.js, Express, REST APIs & database design",
  },
  {
    icon: FaLayerGroup,
    label: "Full-Stack Development",
    color: "#4361ee",
    description: "End-to-end applications with seamless integration",
  },
];

const stats = [
  { value: aboutInfo.client, label: "Happy Clients" },
  { value: aboutInfo.experience, label: "Years Experience" },
  { value: aboutInfo.project, label: "Projects Done" },
  { value: aboutInfo.website, label: "Websites Built" },
];

/* ─── Animation Variants ─── */
const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ─── Scroll parallax ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const statsY = useTransform(scrollYProgress, [0, 1], [50, -30]);

  /* ─── 3D Mouse tilt for about image ─── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );
  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-base-100 py-24 md:py-32 overflow-hidden"
      id="about"
    >
      {/* ── Parallax Background Layer ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] rounded-full bg-[#7209b7]/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-[350px] h-[350px] rounded-full bg-[#f72585]/6 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <div className="relative z-10 w-[90%] xl:w-[80%] max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f72585]" />
            <span className="text-xs font-medium text-base-content/60 uppercase tracking-[0.15em]">
              About Me
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content tracking-tight">
            Crafting Digital{" "}
            <span className="bg-linear-to-r from-[#f72585] via-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ── Left — Image with 3D tilt + scroll parallax ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: imageY }}
            className="relative mx-auto lg:mx-0"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[320px] h-[380px] md:w-[380px] md:h-[440px] lg:w-[420px] lg:h-[480px]"
            >
              {/* Rotating gradient border */}
              <div
                className="absolute -inset-[3px] rounded-4xl animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 90deg, #f72585, #7209b7, #4361ee, #4cc9f0, #f72585)",
                }}
              />

              {/* Image container */}
              <div className="absolute inset-0 rounded-4xl overflow-hidden border-4 border-base-100 bg-base-300">
                <Image
                  src={aboutInfo.img}
                  alt={aboutInfo.title}
                  width={450}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right — Text Content with scroll parallax ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: textY }}
          >
            <motion.h3
              variants={fadeRight}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content tracking-tight leading-snug"
            >
              {aboutInfo.title}
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm md:text-base text-base-content/50 leading-relaxed max-w-lg"
            >
              {aboutInfo.description}
            </motion.p>

            {/* ── Skill Cards ── */}
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeLeft}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-base-content/2 border border-base-content/5 hover:bg-base-content/5 hover:border-base-content/10 transition-all duration-300"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${skill.color}10` }}
                  >
                    <skill.icon
                      className="w-4.5 h-4.5 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-base-content">
                      {skill.label}
                    </h4>
                    <p className="text-xs text-base-content/40 mt-0.5">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Row with scroll parallax ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ y: statsY }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative text-center p-6 rounded-2xl bg-base-content/2 border border-base-content/5 hover:border-[#f72585]/20 hover:bg-base-content/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-b from-[#f72585]/5 to-transparent pointer-events-none" />
              <p className="relative text-3xl md:text-4xl font-bold bg-linear-to-r from-[#f72585] to-[#7209b7] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="relative text-xs font-medium text-base-content/40 mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

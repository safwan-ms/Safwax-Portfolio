"use client";
import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useCallback } from "react";
import ContactForm from "../Contact/ContactForm";
import SocialMediaIcon from "./SocialMediaIcon";

/* ─── Entrance Variants ─── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ─── Scroll-based parallax ─── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Different layers move at different speeds for depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  /* ─── 3D Mouse tilt for profile image ─── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

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
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-base-100"
      id="home"
    >
      {/* ── Parallax Background Layer ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#f72585]/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#7209b7]/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[#4361ee]/4 blur-3xl" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: contentY, opacity: textOpacity }}
        className="relative z-10 flex justify-center flex-col w-[90%] xl:w-[80%] max-w-7xl h-full mx-auto pt-24 pb-16 md:pb-20 lg:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* ── Text Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mobile profile image */}
            <motion.div
              variants={scaleIn}
              className="relative mx-auto mt-2 mb-8 lg:hidden"
            >
              <div className="relative w-[180px] h-[180px] md:w-[280px] md:h-[280px] mx-auto">
                <div
                  className="absolute -inset-1 rounded-full animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #f72585, #7209b7, #4361ee, #f72585)",
                    padding: "3px",
                  }}
                />
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-base-100 bg-base-300">
                  <Image
                    src={BaseInfo.profilePic}
                    alt={BaseInfo.name}
                    width={280}
                    height={280}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-base-content/60 tracking-wide uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h2
              variants={fadeLeft}
              className="text-xl md:text-2xl lg:text-3xl text-base-content/80 font-medium tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-base-content font-semibold">
                {BaseInfo.name}
              </span>
            </motion.h2>

            {/* Title with gradient */}
            <motion.h1
              variants={fadeRight}
              className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="bg-linear-to-r from-[#f72585] via-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">
                {BaseInfo.position}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm md:text-base text-base-content/50 leading-relaxed max-w-lg"
            >
              {BaseInfo.description}
            </motion.p>

            {/* Social Icons */}
            <motion.div variants={fadeUp} className="flex mt-6">
              {BaseInfo.socialMedia.map((icon, index) => (
                <SocialMediaIcon key={index} index={index} icon={icon} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <a
                href="images/Safwan_Resume.pdf"
                download
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[14px] font-semibold text-base-content bg-base-content/5 border border-base-content/10 hover:bg-base-content/10 hover:border-base-content/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              >
                <FaDownload className="w-3.5 h-3.5 text-base-content/60 group-hover:text-[#f72585] transition-colors duration-300" />
                Download CV
              </a>
              <button
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_3",
                  ) as HTMLDialogElement;
                  if (modal) modal.showModal();
                }}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[14px] font-semibold text-white bg-linear-to-r from-[#f72585] to-[#7209b7] shadow-[0_4px_20px_rgba(247,37,133,0.3)] hover:shadow-[0_6px_30px_rgba(247,37,133,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Hire Me
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* ── Contact Modal ── */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-0 m-0">
              <form method="dialog">
                <button className="btn btn-sm btn-circle text-base-content btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <ContactForm />
            </div>
          </dialog>

          {/* ── Profile Image — Desktop with 3D tilt + scroll parallax ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: imageY, scale: imageScale }}
            className="relative mx-auto hidden lg:block"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]"
            >
              {/* Rotating gradient border */}
              <div
                className="absolute -inset-[3px] rounded-[2.5rem] animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #f72585, #7209b7, #4361ee, #4cc9f0, #f72585)",
                }}
              />

              {/* Image container */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border-4 border-base-100 bg-base-300">
                <Image
                  src={BaseInfo.profilePic}
                  alt={BaseInfo.name}
                  width={480}
                  height={480}
                  priority
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Floating badge — outside tilt container so it stays on top */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-3 -left-3 z-20 px-4 py-2 rounded-2xl bg-base-100/90 backdrop-blur-xl border border-base-content/10 shadow-xl"
            >
              <span className="text-xs font-bold text-base-content/80 tracking-wide">
                ⚡ Full Stack
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden lg:flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-[11px] font-medium text-base-content/30 uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-base-content/20 flex justify-center pt-1.5 animate-bounce">
            <div className="w-1 h-1.5 rounded-full bg-base-content/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

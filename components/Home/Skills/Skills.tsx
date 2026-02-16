"use client";

import { skillsData } from "@/Data/data";
import * as motion from "motion/react-client";
import { useState } from "react";
import SkillCard from "./SkillCard";

const categories = [
  { key: "frontend" as const, label: "Frontend", color: "#f72585" },
  { key: "backend" as const, label: "Backend", color: "#7209b7" },
  { key: "othersTools" as const, label: "Tools", color: "#4361ee" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<
    "frontend" | "backend" | "othersTools"
  >("frontend");

  const activeSkills = skillsData[activeCategory];
  const activeColor =
    categories.find((c) => c.key === activeCategory)?.color || "#f72585";

  return (
    <section
      className="relative bg-base-100 py-24 md:py-32 overflow-hidden"
      id="skills"
    >
      {/* ── Background accents ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-40 w-[400px] h-[400px] rounded-full bg-[#4361ee]/6 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[350px] h-[350px] rounded-full bg-[#f72585]/7 blur-3xl" />
      </div>

      <div className="relative z-10 w-[90%] xl:w-[80%] max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4361ee]" />
            <span className="text-xs font-medium text-base-content/60 uppercase tracking-[0.15em]">
              Tech Stack
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content tracking-tight">
            Skills &{" "}
            <span className="bg-linear-to-r from-[#f72585] via-[#b5179e] to-[#7209b7] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-base-content/40 max-w-lg mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* ── Category Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "text-white shadow-lg"
                  : "text-base-content/50 bg-base-content/5 border border-base-content/5 hover:bg-base-content/8 hover:text-base-content/70"
              }`}
              style={
                activeCategory === cat.key
                  ? {
                      background: `linear-gradient(135deg, ${cat.color}, ${cat.color}cc)`,
                      boxShadow: `0 4px 20px ${cat.color}30`,
                    }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Skills Grid ── */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {activeSkills.map((skill) => (
            <motion.div key={skill.id} variants={itemVariants}>
              <SkillCard skill={skill} accentColor={activeColor} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import SubHeading from "@/components/Helper/SubHeading";
import * as motion from "motion/react-client";
import { easeOut } from "motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const Skills = () => {
  return (
    <div
      className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>

      <SubHeading>Frontend</SubHeading>

      <motion.div
        className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.frontend.map((skill) => {
          return (
            <motion.div key={skill.id} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          );
        })}
      </motion.div>

      <SubHeading>Backend</SubHeading>

      <motion.div
        className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.backend.map((skill) => {
          return (
            <motion.div key={skill.id} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          );
        })}
      </motion.div>

      <SubHeading>Others Tools</SubHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center"
      >
        {skillsData.othersTools.map((skill) => {
          return (
            <motion.div key={skill.id} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;

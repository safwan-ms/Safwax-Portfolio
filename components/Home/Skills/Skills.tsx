import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import SkillCard from "./SkillCard";
import SubHeading from "@/components/Helper/SubHeading";

const Skills = () => {
  return (
    <div className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16">
      <SectionHeading>My Skills</SectionHeading>

      <SubHeading>Frontend</SubHeading>

      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.frontend.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>

      <SubHeading>Backend</SubHeading>

      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.backend.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>

      <SubHeading>Others Tools</SubHeading>

      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.othersTools.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

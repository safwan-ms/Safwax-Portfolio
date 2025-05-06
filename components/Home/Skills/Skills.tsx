import SectionHeading from "@/components/Helper/SectionHeading";
import { skillsData } from "@/Data/data";
import React from "react";
import FrontendSkillCard from "./FrontendSkillCard";
import OtherToolsSkill from "./OtherToolsSkillCard";

const Skills = () => {
  return (
    <div className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16">
      <SectionHeading>My Skills</SectionHeading>
      <div className="w-full flex justify-center ">
        <div className="bg-success rounded-2xl font-bold  mt-10 mb-10 text-success-content text-2xl px-3 py-2">
          Frontend
        </div>
      </div>
      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.frontend.map((skill) => {
          return <FrontendSkillCard key={skill.id} skill={skill} />;
        })}
      </div>
      <div className="w-full flex justify-center ">
        <div className="bg-success rounded-2xl font-bold  mt-10 mb-10 text-success-content text-2xl px-3 py-2">
          Backend
        </div>
      </div>
      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.backend.map((skill) => {
          return <FrontendSkillCard key={skill.id} skill={skill} />;
        })}
      </div>
      <div className="w-full flex justify-center ">
        <div className="bg-success rounded-2xl font-bold  mt-10 mb-10 text-success-content text-2xl px-3 py-2">
          Others Tools
        </div>
      </div>
      <div className=" w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.othersTools.map((skill) => {
          return <OtherToolsSkill key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

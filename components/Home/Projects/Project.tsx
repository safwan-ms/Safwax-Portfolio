import { projectData } from "@/Data/data";
import SectionHeading from "../../Helper/SectionHeading";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div
      className="bg-base-100 pt-12 md:pt-14 lg:pt-16 pb-12 md:pb-14 lg:pb-16"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-center">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;

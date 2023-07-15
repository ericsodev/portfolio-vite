import React from "react";
import type { Props } from "../index.page.server";
import { motion } from "framer-motion";
//@ts-ignore
import WebIcon from "~icons/mdi/web";
// @ts-ignore
import GithubIcon from "~icons/simple-icons/github";

type Project = NonNullable<Props["project"]>[0];

const IconComponent: React.FC<{ Icon: React.FC<any> }> = ({ Icon }) => {
  return (
    <Icon
      className={`after:text-lg hover:text-tealgreen transition-all hover:scale-125`}
    ></Icon>
  );
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div className="bg-darkgray p-6 rounded-md min-h-[140px] flex flex-col gap-4 border-purple/20 border-[1px]">
      <h1 className="text-white text-xl font-semibold">{project.name}</h1>
      <div className="flex gap-2">
        {project.github && (
          <a href={project.github} className="text-offwhite">
            <IconComponent Icon={GithubIcon}></IconComponent>
          </a>
        )}
        {project.website && (
          <a href={project.website} className="text-offwhite">
            <IconComponent Icon={WebIcon}></IconComponent>
          </a>
        )}
      </div>
      <p className="text-medium  text-offwhite/90">{project.description}</p>
      <div className="flex gap-2 mt-auto">
        {project.skills
          ?.filter((x) => !!x)
          .map((skill, i) => (
            <div
              key={skill?.name + "" + i}
              className="px-2 py-1 rounded-md bg-purple/70 text-sm text-white"
            >
              {skill?.name}
            </div>
          ))}
      </div>
    </motion.div>
  );
}

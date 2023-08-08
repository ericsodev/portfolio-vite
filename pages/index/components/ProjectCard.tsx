import React, { useEffect, useState } from "react";
import type { Props } from "../index.page.server";
import { motion } from "framer-motion";
//@ts-ignore
import WebIcon from "~icons/mdi/web";
//@ts-ignore
import ExpandIcon from "~icons/mdi/arrow-expand";
// @ts-ignore
import GithubIcon from "~icons/simple-icons/github";
import ProjectModal from "./ProjectModal";

export type Project = NonNullable<Props["project"]>[0];

export const IconComponent: React.FC<{ Icon: React.FC<any> }> = ({ Icon }) => {
  return (
    <Icon
      className={`after:text-lg hover:text-tealgreen transition-all hover:scale-125`}
    ></Icon>
  );
};

export default function ProjectCard({ project }: { project: Project }) {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!modalOpen) {
      document.body.style.overflow = "scroll";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [modalOpen]);

  return (
    <motion.div className="group bg-darkgray/60 p-6 rounded-md flex flex-col gap-4 border-stone-800 hover:border-purple/20 border-[1px]">
      {modalOpen && (
        <ProjectModal project={project} setOpen={setModalOpen}></ProjectModal>
      )}
      <div className="flex items-center">
        <h1 className="text-white text-xl font-semibold">{project.name}</h1>
        {project.long_desc && (
          <motion.div
            onClick={() => {
              setModalOpen(true);
            }}
            transition={{ type: "spring", bounce: 0.8 }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            className="ml-auto group-hover:opacity-100 opacity-50 transition-opacity"
          >
            <ExpandIcon className="text-xl ml-auto text-offwhite/50 hover:text-tealgreen transition-colors"></ExpandIcon>
          </motion.div>
        )}
      </div>
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
              className="px-2 py-1 rounded-md bg-purple/70 text-xs text-white"
            >
              {skill?.name}
            </div>
          ))}
      </div>
    </motion.div>
  );
}

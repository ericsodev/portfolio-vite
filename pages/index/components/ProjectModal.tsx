import React from "react";
import { motion } from "framer-motion";
import { IconComponent, Project } from "./ProjectCard";
import ReactMarkdown from "react-markdown";
import mdStyle from "../styling/markdown.module.css";

//@ts-ignore
import WebIcon from "~icons/mdi/web";
//@ts-ignore
import GithubIcon from "~icons/simple-icons/github";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project;
};
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
export default function ProjectModal({ project, ...props }: Props) {
  return (
    <Backdrop {...props}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="group w-fit bg-darkgray p-6 rounded-md flex flex-col gap-4 border-stone-800 hover:border-purple/20 border-[1px]"
      >
        <h1 className="text-offwhite font-semibold text-xl">{project.name}</h1>
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
        <div className="flex gap-2 mt-auto">
          {project.skills
            ?.filter((x) => !!x)
            .map((skill, i) => (
              <div
                key={skill?.name + "" + i}
                className="px-1.5 py-0.5 rounded-md bg-purple/70 text-xs text-white"
              >
                {skill?.name}
              </div>
            ))}
        </div>
        <div className="max-h-96 w-fit mt-6 max-w-[75ch] text-offwhite/90 box-border text-sm leading-loose overflow-y-scroll">
          <ReactMarkdown className={mdStyle.reactMd}>
            {project.long_desc ?? ""}
          </ReactMarkdown>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export function Backdrop({
  setOpen,
  children,
}: Pick<Props, "setOpen"> & React.PropsWithChildren) {
  return (
    <motion.div
      className="fixed px-4 flex justify-center items-center z-20 top-0 right-0 bottom-0 left-0 bg-slate-950/20 backdrop-blur-[2px]"
      onClick={() => setOpen(false)}
    >
      {children}
    </motion.div>
  );
}

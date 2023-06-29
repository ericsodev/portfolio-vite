import {
  FaPython,
  FaJava,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiInsomnia,
  SiLatex,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { IconType } from "react-icons/lib/esm/iconBase";

export type Skill = { name: string; icon: IconType };
export type SkillCategory = { title: string; skills: Skill[] };

export const skills: SkillCategory[] = [
  {
    title: "programming",
    skills: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        name: "HTML/CSS",
        icon: FaHtml5,
      },
    ],
  },
  {
    title: "frameworks",
    skills: [
      {
        name: "ReactJS",
        icon: FaReact,
      },
      {
        name: "ExpressJS",
        icon: SiJavascript,
      },
      {
        name: "NodeJS",
        icon: FaNodeJs,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    title: "databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "LaTeX",
        icon: SiLatex,
      },
      {
        name: "Insomnia",
        icon: SiInsomnia,
      },
    ],
  },
];

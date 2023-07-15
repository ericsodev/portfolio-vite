// @ts-nocheck
import Html5Icon from "~icons/simple-icons/html5";
import CIcon from "~icons/teenyicons/c-solid";
import CSSIcon from "~icons/devicon-plain/css3";
import TailwindIcon from "~icons/simple-icons/tailwindcss";
import MongoIcon from "~icons/simple-icons/mongodb";
import PrismaIcon from "~icons/simple-icons/prisma";
import StrapiIcon from "~icons/simple-icons/strapi";
import InsomniaIcon from "~icons/simple-icons/insomnia";
import FlaskIcon from "~icons/simple-icons/flask";
import PostgresqlIcon from "~icons/simple-icons/postgresql";
import LatexIcon from "~icons/simple-icons/latex";
import DockerIcon from "~icons/mdi/docker";
import JSIcon from "~icons/mdi/language-javascript";
import TSIcon from "~icons/mdi/language-typescript";
import ReactIcon from "~icons/mdi/react";
import JavaIcon from "~icons/mdi/language-java";
import FileIcon from "~icons/mdi/file";
import PythonIcon from "~icons/mdi/language-python";
import GitIcon from "~icons/mdi/git";

interface IconMap {
  [key: string]: React.FC<any>;
}
const iconMap: IconMap = {
  c: CIcon,
  css: CSSIcon,
  docker: DockerIcon,
  flask: FlaskIcon,
  git: GitIcon,
  html: Html5Icon,
  insomnia: InsomniaIcon,
  java: JavaIcon,
  latex: LatexIcon,
  mongodb: MongoIcon,
  postgresql: PostgresqlIcon,
  prisma: PrismaIcon,
  py: PythonIcon,
  react: ReactIcon,
  strapi: StrapiIcon,
  js: JSIcon,
  ts: TSIcon,
  tailwind: TailwindIcon,
  default: FileIcon,
};

export { iconMap };

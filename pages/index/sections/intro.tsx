import React from "react";
import Layout from "../layout";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
// @ts-expect-error Vite SVGR plugin handles SVG to ReactComponent conversion
import { ReactComponent as Avatar } from "../avatar.svg";

export default function Intro() {
  return (
    <Layout>
      <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-6 grid-rows-6">
        {/* <div className="absolute h-1/2 w-full -top-1/4 gradient-radial from-violet-300 to-violet-800"></div> */}
        <div className="mx-auto md:col-start-2 col-span-1 md:col-span-3 lg:col-span-2 row-span-2 row-start-2 md:row-span-2 md:row-start-3">
          <h1 className="text-white text-3xl md:text-5xl font-semibold 2xl:text-6xl">
            hey, i&apos;m <strong className="text-purple">eric</strong>
          </h1>
          <p className="text-white/90 inline-block mt-3 text-sm md:text-base 2xl:text-lg">
            i like to learn and make stuff along the way
            <div className="h-[2px] max-w-full bg-indigo-300/60 rounded-lg mt-8"></div>
          </p>
          <div className="mt-6 flex gap-7 items-center">
            <a
              href="/"
              title="github"
              className="inline-block text-white text-4xl hover:text-indigo-400 focus:text-indigo-500 transition-colors focus:scale-95 hover:scale-105"
            >
              <SiGithub></SiGithub>
            </a>
            <a
              href="/"
              title="github"
              className="inline-block text-white text-3xl hover:text-indigo-400 focus:text-indigo-500 transition-colors focus:scale-95 hover:scale-105"
            >
              <SiLinkedin></SiLinkedin>
            </a>
            <a
              href="/"
              title="github"
              className="inline-block text-white text-4xl hover:text-indigo-400 focus:text-indigo-500 transition-colors focus:scale-95 hover:scale-105"
            >
              <IoMdMail></IoMdMail>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3 row-span-2 md:row-span-3 md:row-start-2 flex items-center justify-center place-items-center">
          <Avatar className="md:h-1/2 lg:h-2/3"></Avatar>
        </div>
      </div>
    </Layout>
  );
}

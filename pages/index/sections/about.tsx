import React from "react";
import Layout from "../layout";
import RedactReveal from "../components/RedactReveal";
import ReactMarkdown from "react-markdown";
import { useProps } from "../ propContext";
import SkillList from "../components/SkillList";

export default function About() {
  const { about } = useProps();
  return (
    <Layout>
      <div
        className="lg:col-start-2 col-span-1 lg:col-span-3 row-span-2 row-start-2 md:row-span-2
         md:row-start-3 lg:justify-self-start justify-self-center px-6 md:px-0 flex flex-col gap-4"
      >
        <div className="flex items-center gap-6">
          <h1 className="inline-block text-white text-3xl md:text-5xl font-semibold 2xl:text-6xl">
            about <strong className="text-purple">me</strong>
          </h1>
          <div className="h-[2px] grow shrink mr-6 bg-indigo-300/60 rounded-lg"></div>
        </div>
        <div className="mt-4 text-offwhite leading-relaxed">
          <ReactMarkdown className="">{about?.description ?? ""}</ReactMarkdown>
        </div>
        <div className="mt-8 flex gap-4">
          <p className="text-tealgreen text-3xl grow-0">&gt;</p>
          <SkillList></SkillList>
        </div>
      </div>
    </Layout>
  );
}

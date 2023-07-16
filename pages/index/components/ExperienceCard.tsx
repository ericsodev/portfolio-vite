import React from "react";
import type { Props } from "../index.page.server";
import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import mdStyle from "../styling/markdown.module.css";

type Experience = NonNullable<Props["experiences"]>[0];

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="w-full bg-darkgray/40 rounded-md p-6 min-h-[120px] border-stone-800 hover:border-purple/20 border-[1px]">
      <div className="flex items-center flex-wrap gap-4">
        <span className="mr-auto">
          <h2 className="text-white text-sm md:text-lg lg:text-xl font-medium">
            {experience?.role}
          </h2>
          <h1 className="text-tealgreen/90 text-sm md:text-base font-semibold">
            {experience?.company}
          </h1>
        </span>
        <span className="text-sm text-offwhite/70 self-baseline">
          {dayjs(experience?.start ?? "").format("MM/YYYY")} &mdash;{" "}
          {experience?.end ? (
            dayjs(experience?.end).format("MMM YYYY")
          ) : (
            <text className="text-offwhite">present</text>
          )}
        </span>
      </div>
      <div className="mt-6 max-w-[75ch] text-offwhite/90 box-border text-sm leading-loose">
        <ReactMarkdown className={mdStyle.reactMd}>
          {experience?.description ?? ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}

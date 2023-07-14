import React from "react";
import Layout from "../layout";

// @ts-ignore
import GithubIcon from "~icons/simple-icons/github";
// @ts-ignore
import LinkedInIcon from "~icons/simple-icons/linkedin";
// @ts-ignore
import MailIcon from "~icons/gridicons/mail";

// @ts-expect-error Vite SVGR plugin handles SVG to ReactComponent conversion
import { ReactComponent as Avatar } from "../avatar.svg";
import { useProps } from "../ propContext";

export default function Intro() {
  const { intro, contact } = useProps();
  return (
    <Layout>
      <div
        className="lg:col-start-2 col-span-1 lg:col-span-2 row-span-2 row-start-2 md:row-span-2
         md:row-start-3 lg:justify-self-start justify-self-center"
      >
        <h1 className="text-white text-3xl md:text-5xl font-semibold 2xl:text-6xl">
          hey, i&apos;m <strong className="text-purple">eric</strong>
        </h1>
        <p className="text-white/90 inline-block mt-3 text-sm md:text-base 2xl:text-lg">
          {intro?.tagline}
          <div className="h-[2px] max-w-full bg-indigo-300/60 rounded-lg mt-8"></div>
        </p>
        <div className="mt-8 flex gap-7 items-center">
          <a
            href={contact?.github || "https://github.com"}
            title="github"
            className="inline-block text-white text-3xl hover:text-indigo-400 focus:text-indigo-500
              transition-colors focus:scale-95 hover:scale-105"
          >
            {/* <SiGithub></SiGithub> */}
            <GithubIcon></GithubIcon>
          </a>
          <a
            href={contact?.linkedin || "https://linkedin.com"}
            title="linkedin"
            className="inline-block text-white text-2xl hover:text-indigo-400 focus:text-indigo-500
               transition-colors focus:scale-95 hover:scale-105"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
          <a
            href={contact?.business_email || ""}
            title="email"
            className="inline-block text-white text-3xl hover:text-indigo-400 focus:text-indigo-500
               transition-colors focus:scale-95 hover:scale-105"
          >
            <MailIcon></MailIcon>
          </a>
        </div>
      </div>
      <div
        className="md:col-span-2 lg:col-span-3 row-span-2 md:row-span-3 md:row-start-2 flex items-center
         justify-center place-items-center"
      >
        <Avatar className="h-3/5 md:h-1/2 lg:h-2/3 place-self-center"></Avatar>
      </div>
    </Layout>
  );
}

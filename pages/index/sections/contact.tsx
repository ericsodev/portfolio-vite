import React from "react";
import Layout from "../layout";
import { useProps } from "../ propContext";
// @ts-ignore
import GithubIcon from "~icons/simple-icons/github";
// @ts-ignore
import LinkedInIcon from "~icons/simple-icons/linkedin";
// @ts-ignore
import MailIcon from "~icons/gridicons/mail";
interface EmailProps extends React.PropsWithChildren {
  mailtoLink: string;
  className: string;
}
const Email: React.FC<EmailProps> = ({ children, mailtoLink, className }) => {
  return (
    <a
      className={`${className} text-white px-6 py-2 rounded-md`}
      href={mailtoLink}
    >
      {children}
    </a>
  );
};

export default function Contact() {
  const { contact } = useProps();
  return (
    <Layout>
      <div
        className="lg:col-start-2 col-span-1 lg:col-span-3 row-span-2 row-start-2 md:row-span-2
         md:row-start-3 lg:justify-self-start justify-self-center w-full"
      >
        <div className="flex items-center gap-6">
          <h1 className="inline-block text-white text-3xl md:text-5xl font-semibold 2xl:text-6xl">
            contact <strong className="text-purple">me</strong>
          </h1>
          <div className="h-[2px] grow shrink mr-6 bg-indigo-300/60 rounded-lg"></div>
        </div>
        <div className="mt-4 text-white flex flex-col gap-12  ">
          <div className="mt-8 flex gap-7 items-center">
            <a
              href={contact?.github || "https://github.com"}
              title="github"
              className="inline-block text-white text-3xl hover:text-indigo-400 focus:text-indigo-500
              transition-colors focus:scale-95 hover:scale-105"
            >
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
          </div>
          <div className="flex gap-4 items-start">
            <Email
              className="bg-tealgreen/70"
              mailtoLink={contact?.business_email ?? ""}
            >
              business email{" "}
            </Email>
            <Email
              className="bg-purple/90"
              mailtoLink={contact?.personal_email ?? ""}
            >
              personal email{" "}
            </Email>
          </div>
        </div>
      </div>
    </Layout>
  );
}

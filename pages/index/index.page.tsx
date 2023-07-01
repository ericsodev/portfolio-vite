import Intro from "./sections/intro";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import React from "react";
import Experience from "./sections/experience";

export { Page };
export const documentProps = {
  title: "Eric So",
};
function Page() {
  const container = React.useRef(null);
  return (
    <>
      <div ref={container}>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </>
  );
}

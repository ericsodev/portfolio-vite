import Intro from "./sections/intro";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import React from "react";
import Experience from "./sections/experience";
import type { Props } from "./index.page.server";
import { PropProvider } from "./ propContext";

export { Page };

const PropContext = React.createContext(undefined);

function Page(props: Props) {
  const container = React.useRef(null);
  return (
    <PropProvider props={props}>
      <div ref={container}>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Experience></Experience>
        <Contact></Contact>
      </div>
    </PropProvider>
  );
}

import "../styles/projects.css";
import { SectionLayout } from "./layout/SectionLayout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { projects } from "../data/projects";

export function Projects({ className }: { className?: string }): JSX.Element {
  return (
    <SectionLayout title={"creations"} id="projects">
      <div className={`projects ${className}`}>
        <div
          className="cards hidden"
          onMouseMove={handleCardHover}
          onMouseLeave={handleCardExit}
        >
          {projects.map((proj, i) => {
            return <Card key={i} index={i} {...proj}></Card>;
          })}
        </div>
      </div>
    </SectionLayout>
  );
}

function handleCardHover(e: React.MouseEvent) {
  for (let i = 0; i < projects.length; i++) {
    const card = document.getElementById(`card-${i}`);
    const rect = card?.getBoundingClientRect();
    if (!rect) continue;
    card?.style.setProperty("--mouse-x", `${e.clientX - rect.x}px`);
    card?.style.setProperty("--mouse-y", `${e.clientY - rect.y}px`);
  }
}

function handleCardExit(e: React.MouseEvent) {
  for (let i = 0; i < projects.length; i++) {
    const card = document.getElementById(`card-${i}`);
    card?.style.setProperty("--mouse-x", ``);
    card?.style.setProperty("--mouse-y", ``);
  }
}

interface ICard {
  title: string;
  url?: string;
  github?: string;
  desc?: string;
  tools: string[];
  children?: React.ReactNode;
  index: number;
}
function Card({
  index,
  title,
  desc,
  tools,
  children,
  url,
  github,
}: ICard): JSX.Element {
  return (
    <div id={`card-${index}`} className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-icons">
          {github && (
            <a href={github}>
              <GitHubIcon></GitHubIcon>
            </a>
          )}
          {url && (
            <a href={url}>
              <LanguageIcon></LanguageIcon>
            </a>
          )}
        </div>
      </div>
      <div className="card-content">
        <p>{desc}</p>
        {children}
      </div>
      <div className="card-tags">
        {tools.map((tool) => {
          return <span className="card-tag">{tool}</span>;
        })}
      </div>
    </div>
  );
}

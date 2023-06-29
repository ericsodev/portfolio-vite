import "../styles/sideMenu.css";
import { useState, useEffect } from "react";

type SideMenuProps = {
  currentSection: string;
  sections: string[];
  setSection: React.Dispatch<React.SetStateAction<string>>;
};

export default function SideMenu({
  currentSection,
  sections,
  setSection,
}: SideMenuProps): JSX.Element {
  const [displayed, setDisplayed] = useState(["", "", ""]);
  useEffect(() => {
    let currentIdx = sections.indexOf(currentSection);
    let newDisplayed = ["", "", ""];
    for (let i = -1; i < 2; i++) {
      if (currentIdx + i < 0 || currentIdx + i >= sections.length) {
        newDisplayed[i + 1] = "";
        continue;
      }
      newDisplayed[i + 1] = sections[currentIdx + i];
    }
    setDisplayed(newDisplayed);
  }, [currentSection, sections, setDisplayed]);
  return (
    <div className="side-menu">
      {displayed.map((v, i) => {
        return (
          <p
            className={`${i === 1 && "current"} link`}
            onClick={() => {
              document.getElementById(v)?.scrollIntoView(true);
              setSection((curr) => v || curr);
            }}
          >
            {v || " "}
          </p>
        );
      })}
    </div>
  );
}

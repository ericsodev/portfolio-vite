import { useEffect, useState } from "react";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Present } from "./pages/Present";
import { Footer } from "./pages/Footer";
import "./App.css";
import SideMenu from "./components/sideMenu";

function App() {
  const sectionIds = ["intro", "about", "projects", "present", "contact"];
  const [currentSection, setCurrentSection] = useState("intro");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let highest: any = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (entry.target.id) {
              console.log(entry.target.id);
              highest.push({
                id: entry.target.id,
                y: entry.target.getBoundingClientRect().top,
              });
            }
          }
          let topSection: any;
          for (let entry of highest) {
            if (!topSection || topSection.y < entry.y) {
              topSection = entry;
            }
          }
          setCurrentSection((v) => topSection?.id || v);
        });
      },
      { threshold: 0.2 }
    );
    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((e) => observer.observe(e));
  }, []);
  const handleKeydown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "j":
        if (currentSection !== sectionIds[sectionIds.length - 1]) {
          const next = sectionIds[sectionIds.indexOf(currentSection) + 1];
          document.getElementById(next)?.scrollIntoView();
          setCurrentSection((v) => next || v);
        }
        break;
      case "k":
        if (currentSection !== sectionIds[0]) {
          const prev = sectionIds[sectionIds.indexOf(currentSection) - 1];
          document.getElementById(prev)?.scrollIntoView(true);
          setCurrentSection((v) => prev || v);
        }
        break;
    }
  };
  return (
    <div className="App" onKeyDown={handleKeydown} tabIndex={0}>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Present></Present>
      <Footer></Footer>
      <SideMenu
        currentSection={currentSection}
        sections={sectionIds}
        setSection={setCurrentSection}
      ></SideMenu>
    </div>
  );
}

export default App;

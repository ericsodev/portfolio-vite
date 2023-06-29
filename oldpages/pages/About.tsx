import { SkillCategory, skills } from "../data/skills";
import "../styles/about.css";
import { SectionLayout } from "./layout/SectionLayout";

export function About(): JSX.Element {
  return (
    <SectionLayout title={"about me"} id="about">
      <div className="about hidden">
        <div className="about-intro">
          <p className="p-1">
            I am a second year <strong>Computer Science</strong> specialist at
            the University of Toronto. I have a strong interest in full-stack
            web development, computational linguistics, and visualization of
            physics simulations.
          </p>
          <br></br>
          <p className="p-2">
            In my free time, I enjoy building mechanical keyboards and
            configuring window managers.
          </p>
        </div>
        <div className="skills">
          <h2 className="skills-heading">skills</h2>
          {skills.map((v, _) => (
            <SkillCategorySection
              key={v.title}
              skillCategory={v}
            ></SkillCategorySection>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}

type SkillCategoryProps = {
  skillCategory: SkillCategory;
};
function SkillCategorySection({
  skillCategory,
}: SkillCategoryProps): JSX.Element {
  return (
    <div className="skills-category">
      <h3 className="skills-category-title">/ {skillCategory.title} /</h3>
      <ul>
        {skillCategory.skills.map((v, i) => {
          return (
            <li key={i}>
              <span className="iconWrapper">{<v.icon></v.icon>}</span> {v.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";
import { useProps } from "../ propContext";
import { Enum_Skill_Type } from "../../../src/__generated__/graphql";
import type { Props } from "../index.page.server";

type Skill = NonNullable<NonNullable<Props["skills"]>[0]>;
interface ListProps extends React.PropsWithChildren {
  skills: Skill[];
}
const List: React.FC<ListProps> = ({ skills, children }) => {
  return (
    <div className="group grow">
      <h3 className="text-white mb-2 group-hover:text-tealgreen">
        &lt;{" "}
        <strong className="group-hover:px-2 transition-all">{children}</strong>{" "}
        &gt;
      </h3>
      <ul>
        {skills.map((skill) => (
          <li className="text-offwhite" key={"" + skill.name + skill.type}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SkillList() {
  const { skills } = useProps();
  console.table(skills);
  const filtered: Skill[] =
    skills
      ?.filter((skill) => !!skill && skill.type !== Enum_Skill_Type.Unlisted)
      .map((skill) => skill as Skill) || [];

  return (
    <div className="grow">
      <h2 className="text-white text-3xl font-medium mb-6">my skills</h2>
      <div className="flex gap-8">
        {Object.keys(Enum_Skill_Type)
          .filter((type) => type.toLowerCase() !== Enum_Skill_Type.Unlisted)
          .map((type) => {
            return (
              <List
                key={type}
                skills={filtered.filter(
                  (skill) => skill.type == type.toLowerCase()
                )}
              >
                {type.toLowerCase()}
              </List>
            );
          })}
      </div>
    </div>
  );
}

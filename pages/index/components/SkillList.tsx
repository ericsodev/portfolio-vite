import React from "react";
import { useProps } from "../ propContext";
import { Enum_Skill_Type } from "../../../src/__generated__/graphql";
import type { Props } from "../index.page.server";
import { iconMap } from "./IconList";
type Skill = NonNullable<NonNullable<Props["skills"]>[0]>;
interface ListProps extends React.PropsWithChildren {
  skills: Skill[];
}
const List: React.FC<ListProps> = ({ skills, children }) => {
  return (
    <div className="group">
      <h3 className="text-white mb-2 group-hover:text-tealgreen">
        &lt;{" "}
        <strong className="group-hover:px-2 transition-all text-lg">
          {children}
        </strong>{" "}
        &gt;
      </h3>
      <ul className="flex flex-col gap-3 transition-all group-hover:pl-2 ml-3">
        {skills.map((skill) => {
          const icon_name: string = skill.icon_name?.toLowerCase() || "default";
          const Icon = iconMap[icon_name] ?? iconMap["default"];
          return (
            <li className="text-offwhite" key={"" + skill.name + skill.type}>
              <Icon className="inline-block mr-3"></Icon>
              {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function SkillList() {
  const { skills } = useProps();
  const filtered: Skill[] =
    skills
      ?.filter((skill) => !!skill && skill.type !== Enum_Skill_Type.Unlisted)
      .map((skill) => skill as Skill) || [];

  return (
    <div className="grow">
      <h2 className="text-white text-3xl font-medium mb-6">my skills</h2>
      <div className="grid gap-y-6 grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]">
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

import { SectionLayout } from "./layout/SectionLayout";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_EMAIL,
  ACADEMIC_EMAIL,
} from "../data/contacts";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../styles/footer.css";
import { useState } from "react";

export function Footer(): JSX.Element {
  const [tooltipText, setTooltipText] = useState("click to copy");
  const sendToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    setTooltipText("copied!");
    setTimeout(() => {
      setTooltipText("click to copy");
    }, 800);
  };
  return (
    <SectionLayout id="contact" title="contact me">
      <div className="emails">
        <div
          className="personal label"
          onClick={() => sendToClipboard(PERSONAL_EMAIL)}
        >
          personal
          <div className="tooltip">{tooltipText}</div>
        </div>
        <span className="personal email">{PERSONAL_EMAIL}</span>
        <div
          className="academic label"
          onClick={() => sendToClipboard(ACADEMIC_EMAIL)}
        >
          academic
          <div className="tooltip">{tooltipText}</div>
        </div>
        <span className="academic email">{ACADEMIC_EMAIL}</span>
      </div>
      <div className="contacts">
        <a href={GITHUB_URL}>
          <GitHub className="icon"></GitHub>
        </a>

        <a href={LINKEDIN_URL}>
          <LinkedIn className="icon"></LinkedIn>
        </a>
        <a href={EMAIL}>
          <Email className="icon"></Email>
        </a>
      </div>
    </SectionLayout>
  );
}

import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/contacts";
import "../styles/intro.css";

export function Intro(): JSX.Element {
  return (
    <div className="intro hidden" id="intro">
      <div className="intro-header">
        <h1 className="title-gt">&gt;</h1>
        <h1 className="title">
          hey, im <strong>eric</strong>
        </h1>
      </div>
      <div className="intro-content">
        I like to learn and create stuff along the way.
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
    </div>
  );
}

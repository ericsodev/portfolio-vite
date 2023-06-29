import { SectionLayout } from "./layout/SectionLayout";
import "../styles/present.css";

export function Present(): JSX.Element {
  return (
    <SectionLayout title={"present"} id="present">
      <div className="present hidden">
        <div className="present-section">
          <h3 className="present-section-title">/ currently learning /</h3>
          <ul className="present-section-content">
            <li>tRPC and React Query</li>
            <li>Using Websockets and Redis for realtime updates</li>
          </ul>
        </div>
        <div className="present-section">
          <h3 className="present-section-title">/ current projects /</h3>
          <ul className="present-section-content">
            <li>Paste Win &mdash; version controlled snippet sharing</li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}

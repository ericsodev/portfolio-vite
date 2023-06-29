import useMediaQuery from "../../hooks/useMediaQuery";
import "../../styles/sideNavLayout.css";
export default function SideNavLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const isSmall = useMediaQuery("(max-width: 768px)");
  return (
    <div className="nav-layout">
      {children}
      {!isSmall && SideBar()}
    </div>
  );
}

export function SideBar(): JSX.Element {
  return (
    <div className="sidebar-placeholder">
      <div className="sidebar">df</div>
    </div>
  );
}

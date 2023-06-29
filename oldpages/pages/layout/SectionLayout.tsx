import "../../styles/sectionLayout.css";
export function SectionLayout({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`section-wrapper`}>
      <div className="section hidden" id={id}>
        <section className="section-header">
          <h1 className="section-title">{title}</h1>
        </section>
        {children}
      </div>
    </div>
  );
}

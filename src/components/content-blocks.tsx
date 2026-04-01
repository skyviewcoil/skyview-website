interface ContentSectionProps {
  children: React.ReactNode;
  bg?: "white" | "light";
}

export function ContentSection({
  children,
  bg = "white",
}: ContentSectionProps) {
  return (
    <section
      className={`section-spacing ${bg === "light" ? "bg-sky-light" : ""}`}
    >
      <div className="section-container max-w-prose">{children}</div>
    </section>
  );
}

interface FeatureGridProps {
  items: { title: string; text: string }[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {items.map((item) => (
        <div key={item.title} className="p-5 border border-sky-border bg-white">
          <h3 className="text-h3-mobile md:text-h3-desktop">{item.title}</h3>
          <p className="mt-2 text-body text-sky-muted">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

interface ComparisonRowProps {
  label: string;
  stretch: string;
  other: string;
}

export function ComparisonTable({
  rows,
  headerA = "תקרה מתוחה",
  headerB = "גבס",
}: {
  rows: ComparisonRowProps[];
  headerA?: string;
  headerB?: string;
}) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border-collapse text-body">
        <thead>
          <tr className="bg-sky-navy text-white">
            <th className="p-3 text-right font-semibold">קריטריון</th>
            <th className="p-3 text-right font-semibold">{headerA}</th>
            <th className="p-3 text-right font-semibold">{headerB}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.label}
              className={i % 2 === 0 ? "bg-white" : "bg-sky-light"}
            >
              <td className="p-3 font-medium border border-sky-border">
                {r.label}
              </td>
              <td className="p-3 text-sky-muted border border-sky-border">
                {r.stretch}
              </td>
              <td className="p-3 text-sky-muted border border-sky-border">
                {r.other}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useMemo, useState } from "react";
import { projects } from "../data/siteData";
import { cx } from "../utils/cx";

const tabs = [
  { k: "all", label: "All" },
  { k: "residential", label: "Residential" },
  { k: "commercial", label: "Commercial" },
  { k: "industrial", label: "Industrial" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.type === active);
  }, [active]);

  return (
    <section id="projects" className="bg-off-white px-[8vw] py-[120px] text-charcoal">
      <div className="reveal mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] border border-teal-bright px-3.5 py-1.5 text-teal-bright">
            Portfolio Highlights
          </div>
          <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-[1px] text-teal-deep">
            Featured<br /><span className="text-gold">Projects</span>
          </h2>
        </div>
        <p className="max-w-[520px] text-[15px] text-[#666660] md:text-right">
          From modest renovations to landmark developments across Southern Luzon and NCR
        </p>
      </div>

      <div className="reveal mb-12 flex border-b border-black/10">
        {tabs.map((t) => (
          <button
            key={t.k}
            className={cx(
              "tab-btn -mb-px border-b-2 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[1.5px] transition",
              active === t.k ? "border-gold text-teal-deep" : "border-transparent text-[#888884] hover:text-teal-deep"
            )}
            onClick={() => setActive(t.k)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <div
            key={p.name}
            className={cx(
              "project-card reveal overflow-hidden bg-teal-deep text-white transition hover:-translate-y-2 cursor-pointer",
              "[clip-path:polygon(0_0,calc(100%_-_16px)_0,100%_16px,100%_100%,0_100%)]",
              idx % 3 === 0 && "md:[transition-delay:0.1s]",
              idx % 3 === 1 && "md:[transition-delay:0.2s]",
              idx % 3 === 2 && "md:[transition-delay:0.3s]"
            )}
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0D3530_0%,#1A5C50_100%)]">
              <div className="absolute right-4 top-4 z-10 bg-[rgba(232,160,32,0.9)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-teal-deep [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_6px),calc(100%_-_6px)_100%,0_100%)]">
                {p.badge}
              </div>
              <div className="text-[52px] opacity-40">{p.icon}</div>
              <div className="absolute inset-0 bg-[linear-gradient(0deg,#0A2520_0%,transparent_60%)]" />
            </div>

            <div className="p-6">
              <div className="font-display text-[22px] leading-[1.2] tracking-[0.5px]">{p.name}</div>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/45">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
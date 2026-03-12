import React from "react";
import { heroStats } from "../data/siteData";

export default function Hero({ heroStatsRef }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-teal-deep pt-[72px]">
      {/* Background layers */}
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_50%,rgba(26,92,80,0.5)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(232,160,32,0.08)_0%,transparent_60%),linear-gradient(160deg,#0A2520_0%,#061510_100%)]" />
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(rgba(232,160,32,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(232,160,32,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-0 top-[20%] h-px w-[40%] [background:linear-gradient(90deg,transparent,rgba(232,160,32,0.4),transparent)]" />
        <div className="absolute right-[20%] top-[60%] h-px w-[25%] [background:linear-gradient(90deg,transparent,rgba(232,160,32,0.4),transparent)]" />
        <div className="absolute left-[10%] top-[80%] h-px w-[30%] [background:linear-gradient(90deg,transparent,rgba(232,160,32,0.4),transparent)]" />
      </div>

      {/* Diagonal panel */}
      <div className="absolute right-0 top-0 -z-0 h-full w-[45%] overflow-hidden bg-[linear-gradient(135deg,rgba(26,92,80,0.3)_0%,rgba(232,160,32,0.08)_100%)] [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(232,160,32,0.03)_30px,rgba(232,160,32,0.03)_31px)]" />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 flex min-h-[calc(100vh-72px)] flex-col justify-center px-[8vw] pb-[60px] md:max-w-[800px]">
        <div className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[3px] text-gold">
          <span className="h-[1.5px] w-8 bg-gold" />
          From Concept to Completion
        </div>

        <h1 className="font-display text-white leading-[0.92] tracking-[2px] text-[clamp(70px,10vw,140px)]">
          <span className="block">Design</span>
          <span className="block text-gold">&amp; Build</span>
          <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)]">
            Excellence
          </span>
        </h1>

        <p className="mt-3 max-w-[460px] text-[16px] leading-[1.7] text-white/60">
          Integrated construction solutions that deliver quality, efficiency, and cost-effectiveness — built on
          commitment since 2022.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#faq"
            className="inline-flex items-center gap-2.5 bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-teal-deep transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(232,160,32,0.4)] [clip-path:polygon(0_0,calc(100%_-_12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%_-_12px))]"
          >
            Request a Quote <span className="text-[18px]">→</span>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-white/35 px-6 py-4 text-[13px] font-medium uppercase tracking-[1px] text-white transition hover:border-gold hover:bg-[rgba(232,160,32,0.08)] hover:text-gold"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Stats row – visible immediately */}
      <div
        id="heroStats"
        ref={heroStatsRef}
        className="relative z-10 flex border-t border-white/10 flex-wrap md:flex-nowrap"
      >
        {heroStats.map((s) => (
          <div
            key={s.label}
            className="stat-item relative w-1/2 border-t border-white/10 px-10 py-7 md:w-auto md:flex-1 md:border-t-0 md:border-r md:border-white/10 last:md:border-r-0"
          >
            <div className="font-display text-[52px] leading-none tracking-[1px] text-gold" data-count={String(s.count)}>
              0
            </div>
            <div className="mt-1 text-[12px] uppercase tracking-[2px] text-white/45">{s.label}</div>
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-[width] duration-[1500ms]" />
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5">
        <span className="text-[9px] uppercase tracking-[3px] text-white/30">Scroll</span>
        <div className="h-10 w-px bg-[linear-gradient(to_bottom,rgba(232,160,32,0.8),transparent)]" />
      </div>
    </section>
  );
}
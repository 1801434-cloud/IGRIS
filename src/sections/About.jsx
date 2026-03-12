import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream text-charcoal px-[8vw] py-[120px] grid gap-12 md:grid-cols-2 md:gap-20 items-center"
    >
      <div className="reveal">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] uppercase tracking-[3px] text-gold">
          <span className="h-[1.5px] w-8 bg-gold" />
          About Us
        </div>

        <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-[1px] text-teal-deep">
          We build<br />the IGRIS<br />
          <em className="font-serif italic text-gold">way</em>
        </h2>

        <div className="my-6 h-[3px] w-16 bg-gold" />

        <p className="mb-4 text-[16px] leading-[1.8] text-[#444440]">
          Inocencio-Berberabe Construction started as a small, family-run contracting service in 2022, focused
          on residential builds in Batangas. Through hard work and a reputation for delivering quality work,
          the company evolved into IGRIS Balteus Construction.
        </p>
        <p className="text-[16px] leading-[1.8] text-[#444440]">
          Now a full-service construction firm servicing commercial, industrial, and residential clients across
          Southern Luzon and NCR — from modest renovations to landmark developments, driven by excellence and
          innovation.
        </p>

        <a
          href="#services"
          className="mt-6 inline-flex items-center gap-2.5 bg-teal-deep px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[1px] text-gold transition hover:-translate-y-0.5 hover:bg-teal-bright [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))]"
        >
          Explore Services →
        </a>
      </div>

      <div className="reveal md:[transition-delay:0.2s] relative">
        <div className="absolute -left-2 -top-2 h-10 w-10 border-t-2 border-l-2 border-gold" />
        <div className="absolute -bottom-2 -right-2 h-10 w-10 border-b-2 border-r-2 border-gold" />

        <div className="relative overflow-hidden bg-teal-deep p-6">
          <div className="absolute right-4 top-4 font-display text-[11px] tracking-[2px] text-gold/70">
            BUILT ON COMMITMENT
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(135deg,#0D3530_0%,#1A5C50_100%)] flex flex-col items-center justify-center gap-4">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(232,160,32,0.05)_28px,rgba(232,160,32,0.05)_29px),repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(232,160,32,0.05)_28px,rgba(232,160,32,0.05)_29px)]" />
            <div className="relative text-[64px] opacity-60">🏗️</div>
            <div className="relative text-[12px] uppercase tracking-[2px] text-white/50">Project Updates</div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-5 bg-gold px-5 py-4 text-teal-deep [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%)]">
          <div className="font-display text-4xl leading-none">3+</div>
          <div className="text-[11px] font-semibold uppercase tracking-[1px]">Years Strong</div>
        </div>
      </div>
    </section>
  );
}
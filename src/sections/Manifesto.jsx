import React from "react";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-teal-deep px-[8vw] py-[100px]">
      <div className="pointer-events-none absolute left-[6vw] top-5 font-serif text-[300px] leading-none text-[rgba(232,160,32,0.06)]">
        "
      </div>

      <div className="reveal relative z-10 mx-auto max-w-[800px] text-center">
        <div className="mb-8 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[3px] text-gold">
          <span className="h-px w-14 bg-gold/60" />
          The IGRIS Way
          <span className="h-px w-14 bg-gold/60" />
        </div>

        <div className="relative border border-[rgba(232,160,32,0.25)] px-6 py-10 md:px-14 md:py-14">
          <div className="absolute -left-0.5 -top-0.5 h-5 w-5 border-l-2 border-t-2 border-gold" />
          <div className="absolute -bottom-0.5 -right-0.5 h-5 w-5 border-b-2 border-r-2 border-gold" />

          <p className="font-serif text-[clamp(17px,2vw,20px)] italic leading-[1.8] text-white/80">
            “When IGRIS Balteus Construction says ‘We are built on COMMITMENT,’ it is not just a slogan. Through years of experience, successes, and growth, we now stand confident — fully trusting our capabilities and our team.”
          </p>

          <div className="mt-7 text-[13px] font-semibold uppercase tracking-[1.5px] text-gold">
            — General Manager, Engr. Galien Gerome B. Inocencio
          </div>
        </div>
      </div>
    </section>
  );
}
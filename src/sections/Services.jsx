import React from "react";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-teal-deep px-[8vw] py-[120px]">
      <div className="reveal text-center mb-16">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-gold border border-gold px-3.5 py-1.5">
          What We Offer
        </div>
        <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-[1px] text-white">Our Services</h2>
        <p className="mt-4 text-[16px] text-white/45">Comprehensive construction solutions tailored to your needs</p>
      </div>

      <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <div
            key={s.num}
            className="service-card reveal bg-teal-deep p-12 relative overflow-hidden cursor-pointer transition hover:bg-[rgba(26,92,80,0.4)]"
            style={{ transitionDelay: `${Math.min(idx + 1, 5) * 0.1}s` }}
          >
            <div className="absolute right-6 top-4 font-display text-[72px] leading-none text-white/5">{s.num}</div>

            <div className="mb-6 flex h-14 w-14 items-center justify-center text-[22px] bg-[rgba(232,160,32,0.1)] border border-[rgba(232,160,32,0.2)] transition [clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))]">
              {s.icon}
            </div>

            <div className="font-display text-[26px] tracking-[1px] text-white">{s.name}</div>
            <p className="mt-3 text-[14px] leading-[1.7] text-white/45">{s.desc}</p>

            <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[1.5px] text-gold">
              Learn more →
            </div>
          </div>
        ))}

        <div className="reveal bg-teal-deep p-12 flex items-center justify-center text-center border border-dashed border-[rgba(232,160,32,0.2)]">
          <div>
            <div className="text-4xl mb-3 opacity-40">+</div>
            <div className="font-display text-[18px] tracking-[1px] text-white">Custom Solutions</div>
            <p className="mt-2 text-[14px] leading-[1.7] text-white/45">Have a unique requirement? Let’s build something together.</p>
            <a href="#faq" className="mt-4 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[1.5px] text-gold">
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from "react";
import { faqs } from "../data/siteData";
import { cx } from "../utils/cx";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="bg-cream px-[8vw] py-[120px] text-charcoal">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
        <div className="reveal">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] border border-teal-bright px-3.5 py-1.5 text-teal-bright">
            FAQ
          </div>
          <h2 className="font-display text-[clamp(42px,5vw,72px)] leading-none tracking-[1px] text-teal-deep">
            Frequently<br />Asked<br /><span className="text-gold">Questions</span>
          </h2>
          <p className="mt-4 leading-[1.7] text-[#666660]">
            Everything you need to know about working with IGRIS Balteus Construction.
          </p>

          <a
            href="mailto:sales@igrisofficial.com"
            className="mt-6 inline-flex items-center gap-2.5 bg-teal-deep px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[1px] text-gold transition hover:-translate-y-0.5 hover:bg-teal-bright [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))]"
          >
            Contact Us →
          </a>
        </div>

        <div className="reveal md:[transition-delay:0.2s]">
          {faqs.map((f, idx) => {
            const open = openIdx === idx;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  className="faq-q flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold text-teal-deep transition hover:text-teal-bright"
                  onClick={() => setOpenIdx(open ? null : idx)}
                  aria-expanded={open}
                >
                  <span>{f.q}</span>
                  <span
                    className={cx(
                      "flex h-7 w-7 items-center justify-center text-[16px] font-light transition",
                      open ? "bg-gold text-teal-deep rotate-45" : "bg-teal-deep text-gold",
                      "[clip-path:polygon(0_0,calc(100%_-_6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%_-_6px))]"
                    )}
                  >
                    +
                  </span>
                </button>

                <div
                  className={cx(
                    "overflow-hidden text-[14px] leading-[1.75] text-[#666660] transition-[max-height,padding] duration-400",
                    open ? "max-h-48 pb-5" : "max-h-0"
                  )}
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
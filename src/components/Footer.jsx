import React from "react";
import { navLinks, services } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(232,160,32,0.15)] bg-teal-deep px-[8vw] pt-20">
      <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-gold font-display text-[16px] text-teal-deep [clip-path:polygon(0_0,70%_0,100%_30%,100%_100%,30%_100%,0_70%)]">
              IB
            </div>
            <div className="font-display text-[18px] tracking-[2px] text-white">
              IGRIS <span className="text-gold">BALTEUS</span>
              <div className="text-[12px] tracking-[1px] text-white/40">CONSTRUCTION</div>
            </div>
          </div>
          <p className="text-[13px] leading-[1.7] text-white/40">
            Built on COMMITMENT. Delivering excellence in construction across Southern Luzon and NCR.
          </p>
          <div className="mt-5 inline-block border border-[rgba(232,160,32,0.3)] px-3 py-1.5 text-[10px] uppercase tracking-[2px] text-gold">
            Built on Commitment
          </div>
        </div>

        <div>
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-gold">Quick Links</div>
          <ul className="flex list-none flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="text-[14px] text-white/45 hover:text-white/80" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-gold">Services</div>
          <ul className="flex list-none flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.name}>
                <a className="text-[14px] text-white/45 hover:text-white/80" href="#services">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-gold">Contact Us</div>

          <div className="mb-3 flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center border border-[rgba(232,160,32,0.2)] bg-[rgba(232,160,32,0.1)] text-[12px] text-gold">
              📍
            </div>
            <div className="text-[13px] leading-[1.5] text-white/50">
              4/F, Barangay, Golden Coreville Building, Nueva Villa Subdivision, Batangas City, 4200 Batangas
            </div>
          </div>

          <div className="mb-3 flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center border border-[rgba(232,160,32,0.2)] bg-[rgba(232,160,32,0.1)] text-[12px] text-gold">
              📞
            </div>
            <div className="text-[13px] text-white/50">
              <a className="hover:text-gold" href="tel:+639063589563">
                +63 906 358 9563
              </a>
            </div>
          </div>

          <div className="mb-3 flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center border border-[rgba(232,160,32,0.2)] bg-[rgba(232,160,32,0.1)] text-[12px] text-gold">
              ✉️
            </div>
            <div className="text-[13px] text-white/50">
              <a className="hover:text-gold" href="mailto:sales@igrisofficial.com">
                sales@igrisofficial.com
              </a>
            </div>
          </div>

          <div className="mb-3 flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center border border-[rgba(232,160,32,0.2)] bg-[rgba(232,160,32,0.1)] text-[12px] text-gold">
              📘
            </div>
            <div className="text-[13px] text-white/50">
              <a className="hover:text-gold" href="#">
                @igrisconstruction
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center border border-[rgba(232,160,32,0.2)] bg-[rgba(232,160,32,0.1)] text-[12px] text-gold">
              💬
            </div>
            <div className="text-[13px] text-white/50">
              <a className="hover:text-gold" href="#">
                Messenger
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-5 text-[12px] text-white/25 md:flex-row md:items-center md:justify-between">
        <span>© 2026 IGRIS Balteus Construction. All rights reserved.</span>
        <div className="flex gap-6">
          <a className="hover:text-gold" href="mailto:hr@igrisofficial.com">
            HR: hr@igrisofficial.com
          </a>
          <a className="hover:text-gold" href="mailto:csr.ibconstruction@gmail.com">
            CSR: csr.ibconstruction@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
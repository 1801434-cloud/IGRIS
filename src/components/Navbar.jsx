import React from "react";
import { navLinks } from "../data/siteData";
import { cx } from "../utils/cx";

export default function Navbar({ scrolled, onOpenMobile }) {
  return (
    <nav
      id="navbar"
      className={cx(
        "fixed left-0 right-0 top-0 z-[100] flex h-[72px] items-center justify-between px-[5vw] transition-[background,backdrop-filter,border-color] duration-400",
        scrolled
          ? "border-b border-[rgba(232,160,32,0.15)] bg-[rgba(10,37,32,0.92)] backdrop-blur-[16px]"
          : "bg-transparent"
      )}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <div
          className={cx(
            "flex h-10 w-10 items-center justify-center bg-gold font-display text-[18px] text-teal-deep transition-transform duration-300",
            "[clip-path:polygon(0_0,70%_0,100%_30%,100%_100%,30%_100%,0_70%)]"
          )}
        >
          IB
        </div>
        <span className="font-display text-[22px] tracking-[3px] text-white">
          IGRIS <span className="text-gold">BALTEUS</span>
        </span>
      </a>

      <ul className="hidden list-none gap-9 md:flex">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[1.5px] text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#faq"
        className={cx(
          "hidden items-center gap-2 bg-gold px-6 py-2.5 text-[12px] font-bold uppercase tracking-[1px] text-teal-deep transition hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,160,32,0.35)] md:inline-flex",
          "[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))]"
        )}
      >
        Request Quote
      </a>

      <button
        className="flex flex-col gap-[5px] p-1 md:hidden"
        onClick={onOpenMobile}
        aria-label="Open mobile menu"
      >
        <span className="block h-[2px] w-6 bg-white" />
        <span className="block h-[2px] w-6 bg-white" />
        <span className="block h-[2px] w-6 bg-white" />
      </button>
    </nav>
  );
}
import React from "react";
import { cx } from "../utils/cx";
import { navLinks } from "../data/siteData";

export default function MobileNav({ open, onClose }) {
  return (
    <div
      className={cx(
        "fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-teal-deep transition-transform duration-400 md:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button
        className="absolute right-6 top-6 text-3xl text-white"
        onClick={onClose}
        aria-label="Close mobile menu"
      >
        ✕
      </button>

      {navLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="font-display text-5xl tracking-[3px] text-white hover:text-gold"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
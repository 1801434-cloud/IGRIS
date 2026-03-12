import React from "react";
import { cx } from "../utils/cx";

export default function BackToTop({ visible }) {
  return (
    <button
      id="back-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cx(
        "fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center bg-gold text-[18px] text-teal-deep transition hover:bg-white",
        "[clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
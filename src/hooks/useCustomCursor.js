import { useEffect } from "react";

export function useCustomCursor() {
  useEffect(() => {
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cur || !ring) return;

    const isCoarse = window.matchMedia?.("(pointer: coarse)")?.matches;
    if (isCoarse) return;

    const onMove = (e) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      window.setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 80);
    };

    const targets = Array.from(
      document.querySelectorAll("a, button, .service-card, .project-card, .faq-q, .tab-btn")
    );

    const onEnter = () => {
      cur.style.width = "20px";
      cur.style.height = "20px";
      ring.style.width = "52px";
      ring.style.height = "52px";
    };
    const onLeave = () => {
      cur.style.width = "12px";
      cur.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", onMove);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);
}
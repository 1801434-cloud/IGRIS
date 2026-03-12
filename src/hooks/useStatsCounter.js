import { useEffect } from "react";

function animateCount(el, target, suffix) {
  let start = 0;
  const duration = 1800;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function useStatsCounter(heroStatsRef) {
  useEffect(() => {
    const node = heroStatsRef?.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;

          document.querySelectorAll(".stat-item").forEach((si) => si.classList.add("animate"));
          document.querySelectorAll("[data-count]").forEach((el) => {
            const value = parseInt(el.dataset.count, 10);
            const suffix = el.dataset.count === "100" ? "%" : "+";
            animateCount(el, value, suffix);
          });

          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [heroStatsRef]);
}
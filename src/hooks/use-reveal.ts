import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook using IntersectionObserver.
 * Returns a ref + boolean. Once revealed, stays revealed (no flicker).
 * Respects prefers-reduced-motion (returns true immediately).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0, rootMargin: "0px" },
) {
  const ref = useRef<T | null>(null);
  // SSR and the initial hydrated render are visible. Only offscreen content
  // is armed for motion once an observer is available.
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) return;
    setShown(false);
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
          break;
        }
      }
    }, options);
    obs.observe(el);
    const reveal = () => {
      setShown(true);
      obs.disconnect();
    };
    const onMotionChange = () => {
      if (motion.matches) reveal();
    };
    motion.addEventListener("change", onMotionChange);
    // A failed observer or fast navigation must never strand hidden content.
    const safety = window.setTimeout(reveal, 1800);
    return () => {
      obs.disconnect();
      window.clearTimeout(safety);
      motion.removeEventListener("change", onMotionChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, shown };
}

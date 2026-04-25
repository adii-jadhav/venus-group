import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface Props {
  /** Full string like "100,000+" or "26+". The numeric portion is animated; suffix/prefix preserved. */
  value: string;
  duration?: number; // ms
  className?: string;
}

/**
 * Parses the leading number out of `value`, animates 0 → number when in view,
 * and re-attaches any prefix/suffix (e.g. "+", ",000+"). Falls back to plain
 * text on reduced-motion or non-numeric inputs.
 */
export function CountUp({ value, duration = 1400, className = "" }: Props) {
  const { ref, shown } = useReveal<HTMLSpanElement>({ threshold: 0.4 });
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const numStr = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = numStr ? parseInt(numStr.replace(/,/g, ""), 10) : NaN;
  const hasComma = numStr.includes(",");

  const [n, setN] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!shown || startedRef.current || !Number.isFinite(target)) return;
    startedRef.current = true;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, target, duration]);

  if (!Number.isFinite(target)) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const formatted = hasComma ? n.toLocaleString("en-US") : String(n);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

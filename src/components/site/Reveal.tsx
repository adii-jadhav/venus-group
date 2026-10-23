import { type ReactNode, type CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface Props {
  children: ReactNode;
  delay?: number; // ms
  as?: "div" | "section" | "li" | "article";
  className?: string;
}

/**
 * Subtle fade + slight upward motion on scroll-in.
 * Uses CSS transitions for 60fps performance. Honors reduced-motion via the hook.
 */
export function Reveal({ children, delay = 0, as = "div", className = "" }: Props) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  const style: CSSProperties = {
    transitionDelay: shown ? `${delay}ms` : "0ms",
  };
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={style}
      className={`motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 transition-[opacity,transform] duration-300 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

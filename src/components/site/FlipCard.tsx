import { useState, type ReactNode } from "react";

interface Props {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  active?: boolean;
  onActivate?: () => void;
}

/**
 * Lightweight flip card using CSS transforms only.
 * Click/tap to flip; click again to flip back.
 */
export function FlipCard({ front, back, className = "", active, onActivate }: Props) {
  const [internal, setInternal] = useState(false);
  const flipped = active ?? internal;

  const toggle = () => {
    if (onActivate) onActivate();
    else setInternal((v) => !v);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`relative h-full min-h-[280px] cursor-pointer ${className}`}
      style={{ perspective: "1200px" }}
      onClick={toggle}
      onKeyDown={onKey}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 h-full w-full"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

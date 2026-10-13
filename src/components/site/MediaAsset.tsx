import { useRef, useState } from "react";

interface Props {
  src?: string;
  alt: string;
  ratio?: "video" | "square" | "wide" | "portrait";
  fit?: "cover" | "contain";
  className?: string;
  imageClassName?: string;
  reservedLabel?: string;
  eager?: boolean;
}

const ratioMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/7]",
  portrait: "aspect-[4/5]",
};

export function MediaAsset({
  src,
  alt,
  ratio = "video",
  fit = "cover",
  className = "",
  imageClassName = "",
  reservedLabel,
  eager = false,
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // A cached or already-complete image can finish before React attaches its
  // load listener, which would leave the skeleton up forever.
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-sm border border-border bg-muted ${ratioMap[ratio]} ${className}`}
    >
      {src ? (
        <>
          {!loaded && <div aria-hidden="true" className="absolute inset-0 shimmer-skeleton" />}
          <img
            src={src}
            alt={alt}
            ref={(node) => {
              imgRef.current = node;
              if (node?.complete) setLoaded(true);
            }}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            className={`h-full w-full transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none ${
              fit === "contain" ? "object-contain" : "object-cover"
            } ${imageClassName} ${loaded ? "opacity-100" : "opacity-0"} group-hover:scale-[1.02]`}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Reserved
          </div>
          <div className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            {reservedLabel ?? "Space reserved for an upcoming image upload."}
          </div>
        </div>
      )}
    </div>
  );
}

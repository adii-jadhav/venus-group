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
  return (
    <div className={`group relative w-full overflow-hidden rounded-sm border border-border bg-muted ${ratioMap[ratio]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full transition-transform duration-300 ease-out motion-reduce:transition-none ${
            fit === "contain" ? "object-contain" : "object-cover"
          } ${imageClassName} group-hover:scale-[1.02]`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-5 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Reserved</div>
          <div className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            {reservedLabel ?? "Space reserved for an upcoming image upload."}
          </div>
        </div>
      )}
    </div>
  );
}

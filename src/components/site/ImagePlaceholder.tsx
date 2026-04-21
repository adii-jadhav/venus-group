import { ImageIcon } from "lucide-react";

interface Props {
  label: string;
  ratio?: "video" | "square" | "wide" | "portrait";
  className?: string;
}

const ratioMap = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/7]",
  portrait: "aspect-[4/5]",
};

export function ImagePlaceholder({ label, ratio = "video", className = "" }: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-border bg-muted industrial-grid ${ratioMap[ratio]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm">
          <ImageIcon className="h-6 w-6" />
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
          Image Placeholder
        </div>
        <div className="max-w-xs text-xs text-muted-foreground">
          To be replaced with actual {label} image
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
    </div>
  );
}

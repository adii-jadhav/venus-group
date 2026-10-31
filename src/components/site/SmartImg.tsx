import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

/**
 * Image with a neutral shimmer skeleton that disappears when the image loads.
 * Drop-in replacement for <img>. Keeps the wrapper's aspect ratio so there is
 * no layout shift.
 */
export function SmartImg({
  wrapperClassName = "",
  className = "",
  onLoad,
  onError,
  ...rest
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // A cached or already-complete image can finish before React attaches its
  // load listener, which would leave the skeleton up forever.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete) setLoaded(true);
  }, []);

  return (
    <div
      className={`motion-safe-transition relative h-full w-full overflow-hidden ${wrapperClassName}`}
    >
      {!loaded && <div aria-hidden="true" className="absolute inset-0 -z-0 shimmer-skeleton" />}
      <img
        {...rest}
        ref={(node) => {
          imgRef.current = node;
          if (node?.complete) setLoaded(true);
        }}
        loading={rest.loading ?? "lazy"}
        decoding={rest.decoding ?? "async"}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
        className={`${className} relative motion-safe-transition transition-opacity duration-200 ease-out`}
      />
    </div>
  );
}

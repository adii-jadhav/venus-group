import { useState, type ImgHTMLAttributes } from "react";

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
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative h-full w-full overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div aria-hidden="true" className="absolute inset-0 shimmer-skeleton" />
      )}
      <img
        {...rest}
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
        className={`${className} transition-opacity duration-300 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

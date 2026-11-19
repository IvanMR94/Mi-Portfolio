"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";

type SmartImageProps = ImageProps & {
  loaderSize?: "sm" | "md";
};

export default function SmartImage({
  loaderSize = "sm",
  className = "",
  alt,
  ...props
}: SmartImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      {!loaded && (
        <span className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-blue-950">
          <Loader size={loaderSize} />
        </span>
      )}
      <Image
        {...props}
        ref={imgRef}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

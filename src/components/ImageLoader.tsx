import { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function ImageLoader({ src, fallbackSrc, alt, className, loading = 'lazy' }: ImageLoaderProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={imgSrc || fallbackSrc || undefined}
      alt={alt}
      loading={loading}
      className={`${className} transition-opacity duration-300 ${hasError ? 'opacity-90' : 'opacity-100'}`}
      style={{ imageRendering: '-webkit-optimize-contrast' as any }}
      onError={() => {
        if (!hasError && fallbackSrc) {
          setImgSrc(fallbackSrc);
          setHasError(true);
        }
      }}
    />
  );
}

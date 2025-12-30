import React from 'react';
import Image from 'next/image';

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  columns?: 2 | 3 | 4;
  gap?: number;
}

export default function ImageGrid({ 
  images, 
  columns = 3,
  gap = 4 
}: ImageGridProps) {
  
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const gapClass = `gap-${gap}`;

  return (
    <div className={`w-full grid ${gridCols[columns]} ${gapClass}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          
        </div>
      ))}
    </div>
  );
}

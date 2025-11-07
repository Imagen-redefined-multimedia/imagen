'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// Import the types from the core embla-carousel package
import type { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

export interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  options?: EmblaOptionsType;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      dragFree: true,
      ...options,
    } as EmblaOptionsType,
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.5,
        stopOnInteraction: false,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll && typeof autoScroll.play === 'function') autoScroll.play();
  }, [emblaApi]);

  return (
    <div className="embla w-full overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                embla__slide 
                relative 
                flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]
                h-[240px] sm:h-[320px] lg:h-[400px]
              "
            >
              <Image
                src={image.url}
                alt={image.alt || `slide-${index}`}
                fill
                className="object-cover rounded-2xl shadow-md"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

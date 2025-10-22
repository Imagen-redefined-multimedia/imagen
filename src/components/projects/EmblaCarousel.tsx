'use client';

import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ImageCarousel.module.css';
import Image from 'next/image';

export interface ImageItem {
  url: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  autoplayDelay?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, autoplayDelay = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // used to reset progress bar
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);

  // Handle selection change (for pagination)
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setProgressKey(prev => prev + 1); // Reset progress bar
  }, [emblaApi]);

  // Setup autoplay
  const autoplay = useCallback(() => {
    if (isPaused.current || !emblaApi) return;

    autoplayRef.current = setTimeout(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0); // Loop back to first
      }
    }, autoplayDelay);
  }, [emblaApi, autoplayDelay]);

  // Setup listeners on mount
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    onSelect();
    autoplay();

    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [emblaApi, onSelect, autoplay]);

  // Pause on mouse hover
  useEffect(() => {
    if (!emblaApi) return;

    const node = emblaApi.containerNode();

    const onMouseEnter = () => {
      isPaused.current = true;
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };

    const onMouseLeave = () => {
      isPaused.current = false;
      autoplay();
    };

    node.addEventListener('mouseenter', onMouseEnter);
    node.addEventListener('mouseleave', onMouseLeave);

    return () => {
      node.removeEventListener('mouseenter', onMouseEnter);
      node.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [emblaApi, autoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!emblaApi) return;

      switch (event.key) {
        case 'ArrowLeft':
          emblaApi.scrollPrev();
          break;
        case 'ArrowRight':
          emblaApi.scrollNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emblaApi]);

  // Navigation handlers
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((img, idx) => (
            <div className={styles.embla__slide} key={idx}>
              <Image
                src={img.url}
                alt={img.alt || `Slide ${idx + 1}`}
                width={400}
                height={520}
                className={styles.embla__slide__img}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={scrollPrev} className={`${styles.embla__button} ${styles.prev}`}>
        ‹
      </button>
      <button onClick={scrollNext} className={`${styles.embla__button} ${styles.next}`}>
        ›
      </button>

      {/* Pagination Dots */}
      <div className={styles.embla__dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.embla__dot} ${idx === selectedIndex ? styles.isSelected : ''}`}
            onClick={() => scrollTo(idx)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.embla__progress}>
        <div
          className={styles.embla__progress__bar}
          key={progressKey}
          style={{
            width: '100%',
            transition: `width ${autoplayDelay}ms linear`,
          }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;

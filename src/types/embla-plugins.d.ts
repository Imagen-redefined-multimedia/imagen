// types/embla-plugins.d.ts
declare module 'embla-carousel-auto-scroll' {
  import type { EmblaPluginType } from 'embla-carousel';
  type AutoScrollOptions = {
    speed?: number;
    easing?: (t: number) => number;
    direction?: 'forward' | 'backward';
    stopOnInteraction?: boolean;
    playOnInit?: boolean;
  };

  export default function AutoScroll(options?: AutoScrollOptions): EmblaPluginType;
}

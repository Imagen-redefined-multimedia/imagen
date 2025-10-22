import fs from 'fs';
import path from 'path';
import ImageCarousel, { ImageItem } from './EmblaCarousel';

export default async function HomePage() {
  const carouselDir = path.join(process.cwd(), 'public', 'carousel');
  const files = fs.readdirSync(carouselDir); // get filenames in /public/carousel

  // Filter image files (optional, if you only want JPGs or PNGs)
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  const images: ImageItem[] = imageFiles.map((file) => ({
    url: `/carousel/${file}`, // relative to public/
    alt: `Image ${file}`,
  }));

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md max-w-6xl w-full h-[560px] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Image Carousel</h2>
        <ImageCarousel images={images} autoplayDelay={3000} />
      </div>
    </main>
  );
}

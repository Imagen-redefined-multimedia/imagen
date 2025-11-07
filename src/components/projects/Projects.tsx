import fs from 'fs';
import path from 'path';
import ImageCarousel from './EmblaCarousel';

export default async function HomePage() {
  // Define carousel directory path
  const carouselDir = path.join(process.cwd(), 'public', 'carousel');

  // Read image files dynamically
  const files = fs.readdirSync(carouselDir);

  // Filter valid image extensions
  const images = files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      url: `/carousel/${file}`,
      alt: file.split('.')[0],
    }));

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md max-w-6xl w-full h-[560px] flex flex-col justify-center items-center">
        <ImageCarousel images={images} />
      </div>
    </main>
  );
}

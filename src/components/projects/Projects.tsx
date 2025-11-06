import ImageCarousel from './EmblaCarousel';

export default function HomePage() {
  // 3 static images — no fs or dynamic reading
  const images = [
    { url: '/carousel/pic1.jpg', alt: 'Picture 1' },
    { url: '/carousel/pic2.jpg', alt: 'Picture 2' },
    { url: '/carousel/pic3.jpg', alt: 'Picture 3' },
  ];

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md max-w-6xl w-full h-[560px] flex flex-col justify-center items-center">
        <ImageCarousel images={images} autoplayDelay={3000} />
      </div>
    </main>
  );
}

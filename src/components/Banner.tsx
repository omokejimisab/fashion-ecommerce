import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    title: "Summer Collection",
    subtitle: "Up to 50% off"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    title: "New Arrivals",
    subtitle: "Shop Now"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    title: "Exclusive Deals",
    subtitle: "Limited Time"
  }
];

export function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-transform duration-500 ${
            index === current ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">{banner.title}</h2>
              <p className="text-2xl">{banner.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
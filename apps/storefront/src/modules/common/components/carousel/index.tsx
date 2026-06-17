'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    images: string[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

export default function Carousel({
    images,
    autoSlide = false,
    autoSlideInterval = 3000,
}: CarouselProps) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    // Handle auto-sliding
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    return (
        <div className="relative overflow-hidden rounded-2xl w-full max-w-4xl mx-auto group">
            {/* Slides Container */}
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0 aspect-[16/9] relative">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-1.5 bg-white scale-110" : "bg-white/50"}
              `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
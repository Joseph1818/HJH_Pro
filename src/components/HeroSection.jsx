import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  '/HJH_PIC1.jpg',
  '/HJH_PIC2.jpg',
  '/HJH_PIC3.jpg',
];

const heroTexts = [
  'Welcome to our global network',
  'Discover our worldwide presence',
  'Join us in shaping the future',
];

const overlayColors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

export default function HeroSection({ t }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Color overlays */}
      <div className="absolute inset-y-0 left-0 w-1/3 z-10 flex flex-col">
        {overlayColors.map((color, index) => (
          <motion.div
            key={color}
            className="flex-1"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ backgroundColor: color, opacity: 0.6 }}
          />
        ))}
      </div>

      {/* Sliding images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img 
            src={heroImages[currentSlide]} 
            alt={`Hero ${currentSlide + 1}`} 
            className="w-full h-full object-cover"
            style={{ opacity: 0.8 }}  // Make images slightly transparent
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2 
              className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {t(heroTexts[currentSlide])}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white text-black px-4 py-2 rounded-full focus:outline-none transition-transform hover:scale-110"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-black px-4 py-2 rounded-full focus:outline-none transition-transform hover:scale-110"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
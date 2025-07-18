import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  // Sample images array (replace with your actual images from public folder)
  const images = [
  '/images/logo.jpg',
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
  '/images/13.jpg',
  '/images/14.jpg',
  '/images/15.jpg',
  '/images/16.jpg',
  '/images/17.jpg',
  '/images/18.jpg',
  '/images/19.jpg',
  '/images/20.jpg',
  '/images/21.jpg',
  '/images/22.jpg',
  '/images/23.jpg',
  '/images/24.jpg',
  '/images/25.jpg',
  '/images/26.jpg',
  '/images/27.jpg',
  '/images/28.jpg',
  '/images/29.jpg',
  '/images/30.jpg',
  '/images/31.jpg',
  '/images/32.jpg',
  '/images/33.jpg',
  '/images/34.jpg',
  '/images/35.jpg',
  '/images/36.jpg',
  '/images/37.jpg',
  '/images/38.jpg',
  '/images/39.jpg',
  '/images/40.jpg',
  '/images/41.jpg',
  '/images/42.jpg',
  '/images/43.jpg',
  '/images/44.jpg',
  '/images/45.jpg',
  '/images/46.jpg',
  '/images/47.jpg',
  '/images/48.jpg',
  '/images/49.jpg',
  '/images/50.jpg',
  '/images/51.jpg',
  '/images/52.jpg',
  '/images/53.jpg',
  '/images/54.jpg',
  '/images/55.jpg',
  '/images/56.jpg',
  '/images/57.jpg',
  '/images/58.jpg',
  '/images/59.jpg',
  '/images/60.jpg',
//   '/images/61.jpg',
//   '/images/62.jpg',
//   '/images/63.jpg',
//   '/images/64.jpg',
//   '/images/65.jpg',
//   '/images/66.jpg',
//   '/images/67.jpg',
//   '/images/68.jpg',
//   '/images/69.jpg',
  '/images/70.jpg',
  '/images/71.jpg',
  '/images/72.jpg',
  '/images/73.jpg',
  '/images/74.jpg',
  '/images/75.jpg',
  '/images/76.jpg',
  '/images/77.jpg',
  '/images/78.jpg',
  '/images/79.jpg',
  '/images/80.jpg',
  '/images/81.jpg',
  '/images/82.jpg',
  '/images/83.jpg',
  '/images/84.jpg',
  '/images/85.jpg',
  '/images/86.jpg',
  '/images/87.jpg',
  '/images/88.jpg',
  '/images/89.jpg',
  '/images/90.jpg',
  '/images/91.jpg',
  '/images/92.jpg',
  '/images/93.jpg',
  '/images/94.jpg',
  '/images/95.jpg',
  '/images/96.jpg',
  '/images/97.jpg',
  '/images/98.jpg',
  '/images/99.jpg'
];


  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School <span className="text-blue-600">Gallery</span>
          </h2>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(img, index)}
            >
              <img
                src={img}
                alt={`School activity ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <button
                className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>

              <button
                className="absolute left-4 md:left-10 text-white text-4xl focus:outline-none"
                onClick={goToPrev}
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <img
                  src={selectedImage}
                  alt={`School gallery image ${currentIndex + 1}`}
                  className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
                />
                <div className="text-white text-center mt-4 text-lg">
                  {currentIndex + 1} / {images.length}
                </div>
              </motion.div>

              <button
                className="absolute right-4 md:right-10 text-white text-4xl focus:outline-none"
                onClick={goToNext}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
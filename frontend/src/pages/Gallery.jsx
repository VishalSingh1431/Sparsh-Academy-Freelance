import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  // Sample images array (replace with your actual images from public folder)
  const images = [
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
    '/images/logo.jpg',
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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">School Gallery</h1>
        
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
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
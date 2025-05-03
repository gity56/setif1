import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SetifPageProps {
  startAnimation: boolean;
  onSkip: () => void; // New prop for handling skip action
}

const SetifPage: React.FC<SetifPageProps> = ({ startAnimation, onSkip }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Timer to control the sequence of animations - only starts when startAnimation is true
  useEffect(() => {
    if (startAnimation) {
      // Show description immediately when startAnimation is true
      setShowDescription(true);
      
      // Show description for 6 seconds then fade out
      const descriptionTimer = setTimeout(() => {
        setShowDescription(false);
      }, 6000);
  
      // After description fades out, show map
      const mapTimer = setTimeout(() => {
        setShowMap(true);
      }, 1000);
  
      // After map appears, show carousel after exactly 3 seconds
      const carouselTimer = setTimeout(() => {
        setShowCarousel(true);
      }, 11500);
  
      return () => {
        clearTimeout(descriptionTimer);
        clearTimeout(mapTimer);
        clearTimeout(carouselTimer);
      };
    }
  }, [startAnimation]); // Depend on startAnimation prop

  // Images of Setif (using the path you provided)
  const setifImages = [
    '/s1.jpg',
    '/s2.jpg',
    '/s3.jpg',
    '/s4.jpg',
    '/s5.jpg',
    '/s6.jpg',
  ];

  // Carousel navigation
  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === setifImages.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? setifImages.length - 1 : prev - 1));
  };
  
  // Auto-change images every 5 seconds
  useEffect(() => {
    if (showCarousel) {
      const intervalId = setInterval(() => {
        setActiveSlide((prev) => (prev === setifImages.length - 1 ? 0 : prev + 1));
      }, 5000);
      
      return () => clearInterval(intervalId);
    }
  }, [showCarousel, setifImages.length]);

  return (
    <div className="relative font1 w-full h-screen overflow-hidden bg-black text-white">
      {/* Skip Button - Always visible in the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <button 
          onClick={onSkip}
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
        >
          <span>Skip</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Description Section */}
      <AnimatePresence>
        {showDescription && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center p-8 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="max-w-2xl text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Setif, Algeria
              </motion.h1>
              <motion.p 
                className="text-lg md:text-2xl leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Nestled in the high plains of northeastern Algeria, Setif is a city rich with history dating back to Roman times. 
                Known as "The City of Black Stone" due to its distinctive architecture, Setif combines ancient heritage with modern 
                development. With its mild climate, vibrant markets, and the beautiful Ain El Fouara fountain at its heart, 
                the city serves as a cultural and economic hub for the region.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Google Maps Section */}
      <AnimatePresence>
        {showMap && (
          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102694.88907211071!2d5.3494193757243785!3d36.19115678183406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315e36c98d701%3A0xc9fb77a92cb3bae!2sS%C3%A9tif%2C%20Algeria!5e0!3m2!1sen!2sus!4v1654826842842!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: showCarousel ? 'blur(3px)' : 'none' }}
                allowFullScreen={true} 
                loading="lazy"
                title="Map of Setif, Algeria"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Carousel */}
      <AnimatePresence>
        {showCarousel && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="w-full max-w-4xl mx-auto px-4">
              {/* Carousel Title */}
              <motion.h2 
                className="text-4xl text-black font-bold text-center mb-8"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Discover Setif's Beauty
              </motion.h2>
              
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-lg shadow-xl bg-black/50 backdrop-blur-sm">
                {/* Carousel Frame - This is the dedicated central area for full-sized images */}
                <div className="relative h-80 md:h-96 mx-auto overflow-hidden">
                  {setifImages.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                        index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      {/* Image container with the frame styling */}
                      <div className="w-full h-full flex items-center justify-center bg-black p-2">
                        {/* Image container - now using object-cover to fill the space */}
                        <div className="relative w-full h-full rounded overflow-hidden border-4 border-gray-800">
                          <img 
                            src={img} 
                            alt={`Setif, Algeria - Image ${index + 1}`}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Controls */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button 
                    onClick={goToPrevSlide}
                    className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none -ml-5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button 
                    onClick={goToNextSlide}
                    className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none -mr-5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {setifImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Caption */}
              <motion.p
                className="text-center mt-4 text-white/80 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Experience the charm and beauty of Setif, from its historical monuments to its modern attractions.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SetifPage;
// components/StoryCarousel.js
"use client"

import { useState, useEffect, useRef } from 'react';

const stories = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eUsd9GVBZj8NOz_1jy4Mc3OIIytawFItLpmz5BQFoowEA4RM8NMtow9kqpRHdQOksdE&usqp=CAU',
  'https://hneeblog.com/wp-content/uploads/2024/06/1688014613763ef74d89154de713b849.webp',
  'https://i.pinimg.com/236x/dc/d5/c0/dcd5c08668ff25949b0cedb865d5d938.jpg',
  // Add more story image paths if needed
];

const STORY_DURATION = 6000; // 6 seconds duration for each story

const StoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const updateProgress = (elapsedTime) => {
    const progressPercentage = (elapsedTime / STORY_DURATION) * 100;
    setProgress(progressPercentage);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
    resetProgress();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
    resetProgress();
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleClose = () => {
    // Implement close functionality, e.g., set a state to hide the carousel
  };

  const resetProgress = () => {
    setProgress(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    let startTime = Date.now();
    
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        updateProgress(elapsedTime % STORY_DURATION);
        if (elapsedTime >= STORY_DURATION) {
          handleNext();
          startTime = Date.now(); // Reassign startTime
        }
      }, 100); // Update progress every 100ms
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isPaused]);

  return (
    <div className="relative w-80 h-80 mx-auto overflow-hidden rounded-lg bg-gray-200">
      {/* Progress Bar */}
      <div className="top-0 left-0 w-full h-1 bg-gray-00">
        <div 
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={stories[currentIndex]} 
          alt={`Story ${currentIndex + 1}`} 
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => e.target.src = 'https://via.placeholder.com/800x800?text=Image+Not+Found'} // Placeholder for missing images
        />
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button onClick={handleClose} className="text-white bg-black rounded-full p-2 hover:bg-gray-800">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Controls */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-between px-4">
          <button onClick={handlePrev} className="text-white bg-black rounded-full p-2 hover:bg-gray-800">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={handlePause} className="text-white bg-black rounded-full p-2 hover:bg-gray-800">
            {isPaused ? (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h4v12H4zm12 0h4v12h-4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
          <button onClick={handleNext} className="text-white bg-black rounded-full p-2 hover:bg-gray-800">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCarousel;

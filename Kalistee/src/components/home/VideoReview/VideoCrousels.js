import React, { useState, useEffect, useRef } from "react";

const VideoCarousel = ({ videoUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const videoRefs = useRef([]); // Array to store references to each video

  // Scroll to the next video
  const scrollNext = () => {
    if (carouselRef.current) {
      const newIndex = (currentIndex + 1) % videoUrls.length;
      setCurrentIndex(newIndex);
    }
  };

  // Scroll to the previous video
  const scrollPrev = () => {
    if (carouselRef.current) {
      const newIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
      setCurrentIndex(newIndex);
    }
  };

  // Auto-scroll and update current video index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    }, 4000); // Change video every 4 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [videoUrls.length]);

  // Scroll to the current video
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * 280, // Adjusted for the new width
        behavior: "smooth",
      });
    }

    // Play the active video and pause the others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play(); // Play the active video
        } else {
          video.pause(); // Pause all other videos
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      {/* Scroll Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        ▶
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-hidden" // Use overflow-hidden to hide anything outside the visible area
        style={{
          scrollSnapType: "x mandatory", // Ensures smooth snap to each video
          scrollBehavior: "smooth", // Smooth scroll behavior
        }}
      >
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2 relative"
            style={{
              width: "280px", // Adjusted width for smaller size
              height: "580px", // Adjusted height for smaller size
              transform: index === currentIndex ? "scale(1)" : "scale(0.9)", // Scale the center video larger
              transition: "transform 0.3s ease", // Smooth scaling transition
              scrollSnapAlign: "center", // Ensure the video snaps to center
            }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)} // Store reference to the video
              src={url}
              muted
              loop
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

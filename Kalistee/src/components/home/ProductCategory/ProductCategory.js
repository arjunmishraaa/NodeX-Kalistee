import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
   "https://ik.imagekit.io/durgeshsh/rejuvenating_hair_oil_bhringraj_outdoor.png?updatedAt=1735329276827",
   "https://plus.unsplash.com/premium_photo-1661311816510-2d6f0573e634?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1733860694060-e10fabd4e2b1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 transform ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;

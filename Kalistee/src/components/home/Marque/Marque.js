import React, { useEffect } from 'react';

const Marquee = () => {
  // Injecting custom CSS for marquee animation directly into the document
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(100%);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateX(-100%);
          opacity: 0;
        }
      }
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
    `;
    document.head.appendChild(style);

    // Cleanup the style tag when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-zinc-300">
      {/* "Why us?" text on top of the marquee */}
      <div className="absolute top-1/2 transform -translate-y-1/2 z-20 text-xl font-titleFont text-white bg-black">
        <p className='z-20 px-3 py-2 text-sm'>Why us?</p>
      </div>

      {/* Marquee content */}
      <div className="relative flex animate-marquee font-bodyFont py-2 whitespace-nowrap">
        {/* Repeat the marquee content to create the infinite loop effect */}
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Tested By Dermatologist.</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> approved by Organic and AYUSH</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Clean ingredient</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Innovative formulation</span>

        {/* Repeat the marquee content to create the infinite loop effect */}
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Tested By Dermatologist.</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> approved by Organic and AYUSH</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Clean ingredient</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Innovative formulation</span>

        {/* Repeat the marquee content to create the infinite loop effect */}
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Tested By Dermatologist.</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> approved by Organic and AYUSH</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Clean ingredient</span>
        <span className="px-12 text-sm text-gray-800"><i className="ri-leaf-fill"></i> Innovative formulation</span>
      </div>
    </div>
  );
};

export default Marquee;

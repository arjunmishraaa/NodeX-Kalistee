import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProductCategory = () => {
    const handleLearnMore = () => {
        console.log('Learn More button clicked');
    };

    useEffect(() => {
        // GSAP ScrollTrigger to animate the image when it enters the viewport
        gsap.from(".product-image", {
            opacity: 0, // Start with opacity 0
            scale: 0.9, // Start slightly smaller for a zoom-in effect
            y: 80,
            duration: 1.5,
            // ease: "power2.out",
            scrollTrigger: {
                trigger: ".product-image",
                start: "top 75%", // Start the animation when the top of the image is 75% in view
                end: "bottom 25%", // End the animation when the bottom of the image is 25% in view
                scrub: true, // Makes the animation scrub the scroll
                markers: false, // Disable the scroll trigger markers
                onStart: () => {
                    gsap.to(".product-image", { opacity: 1 }); // Change opacity to 1 when animation starts
                },
            },
        });

        // GSAP ScrollTrigger to animate the yellow container when it enters the viewport
        gsap.from(".yellow-container", {
            opacity: 0, // Start with opacity 0
            scale: 0.9, // Start slightly smaller for a zoom-in effect
            y: 80,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".yellow-container",
                start: "top 75%", // Start the animation when the top of the yellow container is 75% in view
                end: "bottom 25%", // End the animation when the bottom of the yellow container is 25% in view
                scrub: true,
                markers: false, // Disable the scroll trigger markers
                onStart: () => {
                    gsap.to(".yellow-container", { opacity: 1 }); // Change opacity to 1 when animation starts
                },
            },
        });
    }, []);

    return (
        <div className="w-full flex justify-center mt-12">
            <div className="flex flex-col md:flex-row w-[60%] h-auto ">
                {/* Container 1 with image */}
                <div className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1732452792153-6d244db8dc01?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Product Image" 
                        className="product-image w-full h-[450px] object-cover  rounded-lg" // Increased height for better visibility
                    />
                </div>

                {/* Container 2 with yellow text */}
                <div className="yellow-container bg-yellow-500 p-6 md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 rounded-lg shadow-lg h-[500px]"> {/* Increased height here */}
                    <h2 className="text-white text-3xl font-semibold mb-4">Treat acne with science, not hacks.</h2>
                    <p className="text-white text-lg mb-4">We're building a new model...</p>
                    <p className="text-white mb-6">Descriptive text or concise message related to the image that explains the unique selling point of the product.</p>
                    <button 
                        onClick={handleLearnMore} 
                        className="bg-white text-yellow-500 py-3 px-8 rounded-lg border-2 border-white hover:bg-yellow-500 hover:text-white transition-colors duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;
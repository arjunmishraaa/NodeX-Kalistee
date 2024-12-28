import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Payment = () => {
  // GSAP animations on page load
  useEffect(() => {
    // Animating the text message
    gsap.from(".payment-text", {
      opacity: 0,
      y: 20,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });

    // Animating the Explore More button
    gsap.from(".explore-button", {
      opacity: 0,
      scale: 0.8,
      delay: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Adding a "Thank you" and "Purchase Successful" message animation
    gsap.from(".thank-you-message", {
      opacity: 0,
      y: 30,
      delay: 1.5,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="max-w-container mx-auto px-4 py-16 bg-gradient-to-b from-yellow-100 to-yellow-300 min-h-screen flex justify-center items-center flex-col">
      {/* Success Message Container with Card-like styling */} 
      <div className="bg-white shadow-lg rounded-lg p-10 text-center pt-4 flex justify-center items-center flex-col mt-5">
        <p className="thank-you-message text-4xl text-yellow-600 font-bold mt-6">
          Thank You! Your Purchase was Successful!
        </p>
        <br/>
        <p className="payment-text text-lg text-gray-700 mt-3px">
          We appreciate your purchase and hope to serve you again soon. Your payment has been processed securely.
        </p>

        {/* Explore More button with Icon */}
        <Link to="/">
          <button className="explore-button w-52 h-12 bg-primeColor text-white text-lg flex items-center justify-center gap-2 rounded-lg hover:bg-black duration-0">
            <i className="ri-heart-3-fill text-lg"></i>
            <span>Explore More</span>
          </button>
        </Link>
      </div>

      {/* Add an optional section with more details */}
      <div className="mt-10 text-center">
        <p className="text-gray-600">For more details or assistance, feel free to visit our <Link to="/home" className="text-blue-500">website</Link>.</p>
      </div>
    </div>
  );
};

export default Payment;

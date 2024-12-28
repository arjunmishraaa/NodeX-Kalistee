import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Kalistree</span>{" "}
          we are dedicated to offering high-quality, dermatologist-approved Ayurvedic beauty products that promote natural skincare and wellness. Founded with the belief that nature provides the best solutions, our products are carefully crafted using 100% clean ingredients sourced from Ayurveda's rich heritage. Free from harmful chemicals, our range is designed to nourish, rejuvenate, and enhance the natural beauty of your skin and hair.

With years of expertise and a commitment to purity, Kalistree blends traditional Ayurvedic wisdom with modern science, delivering products that are safe, effective, and environmentally friendly. Our goal is to provide you with skincare and haircare solutions that you can trust, while promoting long-term health and beauty without compromising on quality or sustainability. Choose Kalistree for a healthier, more radiant you.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 m-10">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

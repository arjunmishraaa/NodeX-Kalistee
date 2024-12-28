import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title=" Doctor-Trusted" prevLocation={prevLocation} />
      <div className="pb-10 flex flex-col">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Kalistree's</span>{" "}
           Ayurvedic beauty products are not just another trend – they are trusted by some of India’s most respected dermatologists. Our products are carefully formulated using natural, Ayurvedic ingredients that have been trusted for centuries. The formulations are free from harmful chemicals, offering you a safe and effective skincare solution. Dr. R. K. Sharma, a renowned dermatologist in India, has given his professional endorsement to Kalistree’s products, ensuring their quality and efficacy. With years of expertise in skincare, Dr. Sharma is committed to promoting natural solutions for healthy skin. Kalistree's products are designed to provide visible results, leaving your skin glowing and rejuvenated. The brand’s focus on quality and authenticity is what makes it stand out in the beauty industry. Kalistree’s dedication to sustainability and purity ensures that every product is safe for your skin and the environment. When you choose Kalistree, you’re choosing a dermatologist-approved, natural alternative to chemically-laden beauty products. Trust Kalistree to provide you with the very best in Ayurvedic skincare.
           <span>
            <img src="https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=zDglgekwTgR0ng2XiDRs0ZN3drnlXpB5smEmoBB243A=" alt="pic"/>
           </span>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 mt-5 mb-10">
            Continue Shopping
          </button>
        </Link>

        <hr/>
        <div>

          <Breadcrumbs title=" Used Ingredients.." prevLocation={prevLocation} />

          <p>

At Kalistree, we take pride in our commitment to purity and authenticity by using only the finest, 100% natural Ayurvedic ingredients in our products. Every product is crafted with care, ensuring that you experience the benefits of nature’s most potent ingredients, without any harmful chemicals.

Our Serum is infused with potent Ayurvedic herbs like Aloe Vera, known for its deep hydration and skin healing properties. Saffron, another key ingredient, helps brighten the complexion and reduces dark spots. Turmeric, praised for its anti-inflammatory and antimicrobial properties, helps purify the skin, giving it a natural glow. We also use Jojoba Oil, a lightweight moisturizer that balances the skin’s oil production and keeps it hydrated without clogging pores.

Our Conditioner is enriched with a blend of Ayurvedic oils that nourish and strengthen the hair. Brahmi, a traditional herb used for hair growth, helps strengthen hair follicles and improve scalp health. We also include Amla, which is packed with Vitamin C and antioxidants, promoting healthy, shiny, and thicker hair. Shikakai is another ancient Ayurvedic ingredient, known for its natural cleansing properties, which helps remove dirt and excess oils while maintaining the hair’s natural moisture.

Kalistree’s Face Wash is formulated with Neem, which is revered for its antibacterial properties, ensuring a deep clean while preventing acne and skin irritation. Tulsi (holy basil) is known for its ability to detoxify the skin and maintain a healthy glow. We also include Cucumber Extract, which soothes and cools the skin, making it perfect for sensitive skin types. The presence of Rose Water further enhances skin hydration, giving your face a fresh, radiant appearance after every wash.

All of Kalistree’s products are free from synthetic fragrances, sulfates, and parabens, ensuring that only the goodness of nature touches your skin and hair. We follow traditional Ayurvedic wisdom, backed by modern science, to deliver products that not only work but also promote long-term health and wellness. By incorporating these ancient ingredients, Kalistree creates effective beauty solutions that cater to your skin and hair’s natural needs, giving you confidence and radiance every day.

Whether you're looking for healthy, shiny hair, glowing skin, or an overall rejuvenated appearance, Kalistree's Ayurvedic range offers the perfect blend of nature's finest elements, ensuring the best results for your skin and hair care routine. With our products, you can experience the pure, transformative power of Ayurveda in the comfort of your home.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Journal;

import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
// import {
//   bestSellerOne,
//   bestSellerTwo,
//   bestSellerThree,
//   bestSellerFour,
// } from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      <Product
          _id="1011"
          img={'https://ik.imagekit.io/Jivan/NightrepairingCream.png?updatedAt=1735339160726'}
          productName="Night Repair Cream"
          price="799.00"
          // color="Gray"
          badge={false}
          des="A nourishing overnight cream with Ashwagandha, Bakuchiol (natural retinol), and Almond Oil to repair, hydrate, and rejuvenate skin while you sleep."
        />

        <Product
          _id="1012"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/hair_elixir_outdoor.png?updatedAt=1735340075277'}
          productName="Hair Elixir"
          price="399.00"
          // color="Gray"
          badge={false}
          des="A refreshing cooling mist made with Cucumber and Rose Water to provide instant hydration and revitalize the skin.
Sizes: 100ml.
How to Use: Hold the bottle at arm's length and mist evenly over the face for a refreshing boost."
        />
        {/* scdchasio */}
        <Product
            _id="100004"
            img={'https://ik.imagekit.io/durgeshsh/NodeX_images/under-eye_cream_indoor.png?updatedAt=1735338730487'}
            productName="Under-Eye Cream"
            price="399.00"
            // color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        <Product
          _id="1014"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/lip_scrub_outdoor.png?updatedAt=1735340074697'}
          productName="Lip Scrub"
          price="220.00"
          color="Black"
          badge={false}
          des="A sweet lip scrub made with Brown Sugar, Honey, and Almond Oil to exfoliate and soften lips.
Sizes: 15g.
How to Use: Gently rub onto lips and rinse off for smooth, hydrated lips.
"
        />
      </div>
    </div>
  );
};

export default BestSellers;

import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/face_mist_outdoor.png?updatedAt=1735340075047'}
          productName="Face Mist"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/hair_elixir_outdoor.png?updatedAt=1735340075277'}
          productName="Hair Elixir"
          price="180.00"
          color="Gray"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1013"
          img={'https://ik.imagekit.io/Jivan/GlowBoost.png?updatedAt=1735339160659'}
          productName="RadiantWash"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/lip_scrub_outdoor.png?updatedAt=1735340074697'}
          productName="Lip Scrub"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;

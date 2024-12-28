import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={'https://ik.imagekit.io/Jivan/BrightningSerum.png?updatedAt=1735335883052'}
          productName="Brightening Serum"
          price="599.00"
          // color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1102"
          img={'https://ik.imagekit.io/durgeshsh/NodeX_images/rejuvenating_hair_oil_bhringraj_outdoor.png?updatedAt=1735332166746'}
          productName="Rejuvenating Hair Oil"
          price="249.00"
          // color="Gray"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1103"
          img={'https://ik.imagekit.io/Jivan/HairMask.png?updatedAt=1735336513805'}
          productName="Anti-Frizz Hair Mask"
          price="399.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1104"
          img={'https://ik.imagekit.io/Jivan/NightrepairingCream.png?updatedAt=1735335883142'}
          productName="Night Repair Cream"
          price="799.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

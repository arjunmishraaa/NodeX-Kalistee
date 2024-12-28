import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Offer = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto p-10">
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="p-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;

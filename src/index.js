import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app";
import {numberRentalOffers, offerInfoCards} from "@/common/mock";

const init = () => {
  ReactDOM.render(
      <App numberRentalOffers={numberRentalOffers} offerInfoCards={offerInfoCards} />,
      document.getElementById(`root`)
  );
};

init();

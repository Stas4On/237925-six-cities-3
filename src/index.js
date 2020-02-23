import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app";
import {numberRentalOffers, offers} from "@/mocks/offers";

const init = () => {
  ReactDOM.render(
      <App numberRentalOffers={numberRentalOffers} offers={offers} />,
      document.getElementById(`root`)
  );
};

init();

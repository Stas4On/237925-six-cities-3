import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app";
import {numberRentalOffers, offerInfoCards} from "@/common/mock";

const titleLinkHandler = () => {};

const init = () => {
  ReactDOM.render(
      <App numberRentalOffers={numberRentalOffers} offerInfoCards={offerInfoCards} onTitleCardClick={titleLinkHandler} />,
      document.getElementById(`root`)
  );
};

init();

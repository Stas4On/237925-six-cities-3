import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "@components/offer-card/offer-card";
import {offerCards} from "@/test-utils/mocks";

const handleTitleClick = () => {};
const handleCardFocus = () => {};
const offerCard = offerCards[0];

it(`OfferCard should render card correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      onFocus={handleCardFocus}
      offerCard = {offerCard}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

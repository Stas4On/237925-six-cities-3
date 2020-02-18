import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "@components/offer-card/offer-card";

const offerInfoCards = {
  name: `Wood and stone place`,
  price: 50,
  rating: 1,
  type: `apartment`,
  imgUrl: `img/room.jpg`,
  favorite: true,
  premium: false,
  id: 34
};

const handleTitleClick = () => {};
const handleCardFocus = () => {};

it(`OfferCard should render card correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      onFocus={handleCardFocus}
      offerInfoCards = {offerInfoCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

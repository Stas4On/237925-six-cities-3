import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "@components/offer-card/offer-card";

const offerInfoCards = [
  {
    name: `Warm apartment`,
    price: 20,
    rating: 5,
    type: `apartment`,
    imgUrl: `img/room.jpg`,
    favorite: true,
    premium: true,
    id: 67
  }
];

const handleTitleClick = () => {};

it(`OfferList should render correctly`, () => {
  const tree = renderer
    .create(<OfferCard
      offerInfoCards = {offerInfoCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

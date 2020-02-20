import React from "react";
import renderer from "react-test-renderer";
import OffersList from "@components/offers-list/offers-list";

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
    .create(<OffersList
      offerInfoCards = {offerInfoCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

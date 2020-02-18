import React from "react";
import renderer from "react-test-renderer";
import Main from "@components/main/main";

const numberRentalOffers = 12;
const offerInfoCards = [
  {
    name: `Wood and stone place`,
    price: 50,
    rating: 1,
    type: `apartment`,
    imgUrl: `img/room.jpg`,
    favorite: true,
    premium: false,
    id: 34
  }
];

const handleTitleClick = () => {};

it(`<Main /> should render cards offers`, () => {
  const tree = renderer
    .create(<Main
      numberRentalOffers={numberRentalOffers}
      offerInfoCards = {offerInfoCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

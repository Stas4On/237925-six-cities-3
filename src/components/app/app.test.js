import React from "react";
import renderer from "react-test-renderer";
import App from "@components/app/app";

const numberRentalOffers = 56;
const offerInfoCards = [
  {
    name: `Canal View apartment`,
    price: 32,
    rating: 2.33,
    type: `apartment`,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: false,
    id: 56
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    price: 280,
    rating: 4.5,
    type: `apartment`,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: true,
    id: 16
  }
];

it(`<App /> should render <Main />`, () => {
  const tree = renderer
    .create(<App
      numberRentalOffers={numberRentalOffers}
      offerInfoCards = {offerInfoCards}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

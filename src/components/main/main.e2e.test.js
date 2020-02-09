import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "@components/main/main";

Enzyme.configure({
  adapter: new Adapter(),
});

const numberRentalOffers = 56;
const offerInfoCards = [
  {
    name: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    period: 1,
    rating: 4,
    type: 1,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: true,
    id: 12
  },
  {
    name: `Wood and stone place`,
    price: 80,
    period: 1,
    rating: 3.5,
    type: 0,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: false,
    id: 31
  },
  {
    name: `Canal View Prinsengracht`,
    price: 132,
    period: 1,
    rating: 2.33,
    type: 1,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: false,
    id: 23
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    price: 180,
    period: 1,
    rating: 4.5,
    type: 1,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: true,
    id: 1
  },
  {
    name: `Wood and stone place`,
    price: 120,
    period: 1,
    rating: 4.80,
    type: 0,
    imgUrl: `img/room.jpg`,
    favorite: false,
    premium: false,
    id: 5
  }
];

it(`Should title link be pressed`, () => {
  const onTitleCardClick = jest.fn();

  const mainScreen = shallow(
      <Main
        numberRentalOffers={numberRentalOffers}
        offerInfoCards = {offerInfoCards}
        onTitleCardClick={onTitleCardClick}
      />
  );

  const titleCard = mainScreen.find(`.place-card__name-link`).at(0);

  titleCard.props().onClick();

  expect(onTitleCardClick.mock.calls.length).toBe(1);
});

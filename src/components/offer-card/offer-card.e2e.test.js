import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "@components/offer-card/offer-card";

configure({adapter: new Adapter()});

const mock = {
  name: `Beautiful apartment`,
  price: 150,
  rating: 3,
  type: `apartment`,
  imgUrl: `img/room.jpg`,
  favorite: false,
  premium: false,
  id: 34
};


const mockEvent = {
  preventDefault() {}
};


it(`Hover on card should pass to the callback data-object from which this card was created`, () => {
  const card = mock;
  const onTitleCardClick = jest.fn();
  const onFocus = jest.fn();

  const screen = shallow(<OfferCard
    offerCard={card}
    onTitleCardClick={onTitleCardClick}
    onFocus={onFocus}
  />);

  const offerCard = screen.find(`.place-card`);

  offerCard.simulate(`mouseenter`, mockEvent);

  expect(onFocus).toHaveBeenCalledTimes(1);

  expect(onFocus.mock.calls[0][0]).toMatchObject(card);
});

it(`Should title link be pressed`, () => {
  const card = mock;
  const onTitleCardClick = jest.fn();
  const onFocus = jest.fn();

  const screen = shallow(<OfferCard
    offerCard={card}
    onTitleCardClick={onTitleCardClick}
    onFocus={onFocus}
  />);

  const titleCard = screen.find(`.place-card__name-link`).at(0);

  titleCard.props().onClick();

  expect(onTitleCardClick.mock.calls.length).toBe(1);
});

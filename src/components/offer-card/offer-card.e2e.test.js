import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "@components/offer-card/offer-card";
import {offerCards} from "@/test-utils/mocks";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};


it(`Hover on card should pass to the callback data-object from which this card was created`, () => {
  const card = offerCards[0];
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

  expect(onFocus.mock.calls[0][0]).toBe(card.id);
});

it(`Should title link be pressed`, () => {
  const card = offerCards[0];
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

  expect(onTitleCardClick.mock.calls[0][0]).toBe(card.id);
});

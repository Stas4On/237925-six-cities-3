import React from "react";
import renderer from "react-test-renderer";
import OffersList from "@components/offers-list/offers-list";
import {offerCards} from "@/test-utils/mocks";

const handleTitleClick = () => {};

it(`OfferList should render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offerInfoCards = {offerCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

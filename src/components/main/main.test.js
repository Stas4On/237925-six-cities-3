import React from "react";
import renderer from "react-test-renderer";
import Main from "@components/main/main";
import {numberRentalOffers, offerCards} from "@/test-utils/mocks";

const handleTitleClick = () => {};

it(`<Main /> should render cards offers`, () => {
  const tree = renderer
    .create(<Main
      numberRentalOffers={numberRentalOffers}
      offers = {offerCards}
      onTitleCardClick={handleTitleClick}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import App from "@components/app/app";
import {numberRentalOffers, offerCards} from "@/test-utils/mocks";

it(`<App /> should render <Main />`, () => {
  const tree = renderer
    .create(<App
      numberRentalOffers = {numberRentalOffers}
      offers = {offerCards}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

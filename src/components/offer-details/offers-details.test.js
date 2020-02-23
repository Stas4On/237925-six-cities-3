import React from "react";
import renderer from "react-test-renderer";
import {offerCards} from "@/test-utils/mocks";
import OfferDetails from "@components/offer-details/offer-details";

it(`OfferDetails should render correctly`, () => {
  const tree = renderer
    .create(<OfferDetails
      id={offerCards[0].id}
      offers={offerCards}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

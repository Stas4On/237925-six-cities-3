import React from "react";
import renderer from "react-test-renderer";
import Main from "@components/main/main";
import {offers} from "@/mocks/offers";
import {cities} from "@/test-utils/mocks";

const PARIS = `Paris`;

it(`<Main /> should render cards offers`, () => {
  const tree = renderer
    .create(<Main
      onChangeCity = {() => {}}
      offers={offers}
      onTitleCardClick={() => {}}
      city = {PARIS}
      cities={cities}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

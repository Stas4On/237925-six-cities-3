
import React from 'react';
import renderer from 'react-test-renderer';

import Map from './map';
import {offerCards} from "@/test-utils/mocks";

it(`should render correctly Map component`, () => {
  const MapComponent = renderer.create(<Map offers={offerCards}/>).toJSON();

  expect(MapComponent).toMatchSnapshot();
});

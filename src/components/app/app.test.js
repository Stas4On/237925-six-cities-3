import React from "react";
import renderer from "react-test-renderer";
import App from "@components/app/app";
import {cities, initialCity, offerCards} from "@/test-utils/mocks";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

it(`<App /> should render correctly`, () => {
  const store = mockStore({
    offers: offerCards,
    city: initialCity,
    cities
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            onChangeCity = {() => {}}
            onTitleCardClick={() => {}}
            city = {initialCity}
            cities={cities}
            offers = {offerCards}
          />
        </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

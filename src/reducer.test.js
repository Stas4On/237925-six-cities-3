import {reducer, ActionCreator} from "./reducer.js";
import {getCityOffers} from "@/utils";
import {offerCards} from "@/test-utils/mocks";

const initialCity = offerCards[0].city.name;
const initialOffers = getCityOffers(initialCity);
const initialState = {
  city: initialCity,
  offers: initialOffers,
  cities: null
};

describe(`Reducer`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: initialCity,
      offers: initialOffers,
      cities: null
    });
  });

  it(`should return target city state`, () => {
    const targetCity = offerCards[1].city.name;
    const actionChangeCity = ActionCreator.changeCity(targetCity);

    expect(reducer(initialState, actionChangeCity)).toEqual({
      city: targetCity,
      offers: getCityOffers(targetCity),
      cities: null
    });
  });
});

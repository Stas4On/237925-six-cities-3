import {extend} from "./utils.js";
import {getCityOffers} from "@/utils";
import {getCities} from "./utils";
import {offers} from "@/mocks/offers";

const initialCity = offers[0].city.name;
const initialOffers = getCityOffers(initialCity);

const initialState = {
  city: initialCity,
  offers: initialOffers,
  cities: null
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: {city}
  }),
  loadOffers: (city = initialState.city) => ({
    type: ActionType.LOAD_OFFERS,
    payload: {city}
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload.city,
        offers: getCityOffers(action.payload.city)
      });
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: getCityOffers(action.payload.city), cities: getCities()});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

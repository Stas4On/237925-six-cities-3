import {offers} from "./mocks/offers.js";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getCityOffers = (city) => {
  return offers.filter((offer) => offer.city.name === city);
};
export const getCities = () => {
  const cities = offers.map((offer) => offer.city.name);
  return Array.from(new Set(cities));
};

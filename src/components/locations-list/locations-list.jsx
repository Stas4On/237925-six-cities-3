import React from "react";
import types from "@/common/types";
import {MAX_CITIES_LENGTH} from "@/common/constants";

class LocationsList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onChangeCity, city, cities} = this.props;

    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item, index) => index <= MAX_CITIES_LENGTH && (
            <li className="locations__item" key={item}>
              <a
                className={`${item === city ? `tabs__item--active` : ``} locations__item-link tabs__item`}
                href="#"
                onClick={()=>{
                  onChangeCity(item);
                }}
              >
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

LocationsList.propTypes = {
  onChangeCity: types.func,
  cities: types.cities,
  city: types.city
};

export default LocationsList;

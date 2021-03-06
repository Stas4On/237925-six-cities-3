import PropTypes from "prop-types";

const types = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired
          })
        }),
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string),
        photos: PropTypes.arrayOf(PropTypes.string),
        coordinates: PropTypes.arrayOf(PropTypes.number),
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        favorite: PropTypes.bool.isRequired,
        premium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  ),
  card: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      })
    }),
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    photos: PropTypes.arrayOf(PropTypes.string),
    coordinates: PropTypes.arrayOf(PropTypes.number),
    bedrooms: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    premium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  city: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  func: PropTypes.func.isRequired
};

export default types;

import PropTypes from "prop-types";

const types = {
  offerInfoCards: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        favorite: PropTypes.bool.isRequired,
        premium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  ),
  card: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    premium: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  numberRentalOffers: PropTypes.number.isRequired,
  func: PropTypes.func.isRequired
};

export default types;

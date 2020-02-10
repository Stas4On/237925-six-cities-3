import PropTypes from "prop-types";

const types = {
  offerInfoCards: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        period: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        favorite: PropTypes.bool.isRequired,
        premium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      })
  ),
  numberRentalOffers: PropTypes.number.isRequired,
  onTitleCardClick: PropTypes.func
};

export default types;

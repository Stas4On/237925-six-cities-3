import React from "react";
import PropTypes from "prop-types";
import Main from "@components/main/main";

const App = ({numberRentalOffers, offerInfoCards}) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <Main numberRentalOffers={numberRentalOffers} offerInfoCards={offerInfoCards}/>
    </>
  );
};

App.propTypes = {
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
  numberRentalOffers: PropTypes.number.isRequired
};

export default App;

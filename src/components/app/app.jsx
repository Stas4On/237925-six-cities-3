import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";

const App = ({numberRentalOffers, offerInfoCards, onTitleCardClick}) => {
  return (
    <>
      <Main
        numberRentalOffers={numberRentalOffers}
        offerInfoCards={offerInfoCards}
        onTitleCardClick={onTitleCardClick}
      />
    </>
  );
};

App.propTypes = {
  offerInfoCards: types.offerInfoCards,
  numberRentalOffers: types.numberRentalOffers,
  onTitleCardClick: types.onTitleCardClick
};

export default App;

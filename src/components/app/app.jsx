import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";

const App = ({numberRentalOffers, offerInfoCards}) => {
  return (
    <>
      <Main numberRentalOffers={numberRentalOffers} offerInfoCards={offerInfoCards}/>
    </>
  );
};

App.propTypes = {
  offerInfoCards: types.offerInfoCards,
  numberRentalOffers: types.numberRentalOffers
};

export default App;

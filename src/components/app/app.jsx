import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";

const App = ({numberRentalOffers, offerInfoCards}) => {
  const titleLinkHandler = () => {};

  return (
    <>
      <Main
        numberRentalOffers={numberRentalOffers}
        offerInfoCards={offerInfoCards}
        onTitleCardClick={titleLinkHandler}
      />
    </>
  );
};

App.propTypes = {
  offerInfoCards: types.offerInfoCards,
  numberRentalOffers: types.numberRentalOffers
};

export default App;

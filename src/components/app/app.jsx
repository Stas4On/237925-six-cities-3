import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetails from "@components/offer-details/offer-details";

class App extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const {numberRentalOffers, offerInfoCards} = this.props;
    const titleLinkHandler = () => {};

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <>
              <Main
                numberRentalOffers={numberRentalOffers}
                offerInfoCards={offerInfoCards}
                onTitleCardClick={titleLinkHandler}
              />
            </>
          </Route>
          <Route exact path="/dev-offer">
            <OfferDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offerInfoCards: types.offerInfoCards,
  numberRentalOffers: types.numberRentalOffers
};

export default App;

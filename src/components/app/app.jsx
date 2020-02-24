import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetails from "@components/offer-details/offer-details";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _handleOfferTitleClick(activeOffer) {
    this.setState({activeOffer});
  }

  _renderApp() {
    const {numberRentalOffers, offers} = this.props;

    if (this.state.activeOffer) {
      return <OfferDetails id={this.state.activeOffer} offers={offers} />;
    }

    return <Main
      numberRentalOffers={numberRentalOffers}
      offers={offers}
      onTitleCardClick={this._handleOfferTitleClick}
    />;
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer">
            <OfferDetails id={this.state.activeOffer} offers={offers}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: types.offers,
  numberRentalOffers: types.numberRentalOffers
};

export default App;

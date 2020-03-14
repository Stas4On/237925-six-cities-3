import React from "react";
import Main from "@components/main/main";
import types from "@/common/types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import OfferDetails from "@components/offer-details/offer-details";
import {ActionCreator} from "@/reducer";
import {connect} from "react-redux";

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
    const {offers, city, cities, onChangeCity} = this.props;

    if (this.state.activeOffer) {
      return <OfferDetails id={this.state.activeOffer} offers={offers} />;
    }

    return <Main
      onChangeCity = {onChangeCity}
      offers={offers}
      onTitleCardClick={this._handleOfferTitleClick}
      city = {city}
      cities={cities}
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

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  cities: state.cities
});

App.propTypes = {
  offers: types.offers,
  city: types.city,
  cities: types.cities,
  onChangeCity: types.func
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import OfferCard from "@components/offer-card/offer-card";
import types from "@/common/types";

export class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: null
    };
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  render() {
    const {offers, onTitleCardClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((card) => <OfferCard key={card.id} offerCard={card} onTitleCardClick={onTitleCardClick} onFocus={this.handleFocusChange}/>)}
      </div>
    );
  }

  handleFocusChange(activeOffer) {
    this.setState({activeOffer});
  }
}

OffersList.propTypes = {
  offers: types.offers,
  onTitleCardClick: types.func
};

export default OffersList;

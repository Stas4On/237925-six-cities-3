import React from "react";
import OfferCard from "@components/offer-card/offer-card";
import types from "@/common/types";

export class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = null;
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  render() {
    const {offerInfoCards, onTitleCardClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offerInfoCards.map((card) => <OfferCard key={card.id} offerCard={card} onTitleCardClick={onTitleCardClick} onFocus={this.handleFocusChange}/>)}
      </div>
    );
  }

  handleFocusChange(state) {
    console.log('state', state);
    this.setState(state);
  }
}

OffersList.propTypes = {
  offerInfoCards: types.offerInfoCards,
  onTitleCardClick: types.onTitleCardClick
};

export default OffersList;

import React from "react";
import {typesOffers} from "@/common/constants";
import types from "@/common/types";

class OfferCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(data) {
    this.props.onFocus(data);
  }

  render() {
    const {offerCard: card, onTitleCardClick} = this.props;
    return (
      <article className="cities__place-card place-card" onMouseEnter={() => this.handleFocus(card)} onMouseLeave={() => this.handleFocus(null)}>
        {this.addPremiumLabel(card.premium)}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={card.imgUrl} width={260} height={200}
              alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{card.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: card.rating * 20 + `%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a className="place-card__name-link" href="#" onClick={onTitleCardClick}>{card.name}</a>
          </h2>
          <p className="place-card__type">{typesOffers[card.type]}</p>
        </div>
      </article>
    );
  }

  addPremiumLabel(isPremium) {
    return isPremium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : null;
  }
}

OfferCard.propTypes = {
  offerCard: types.card,
  onTitleCardClick: types.func,
  onFocus: types.func
};

export default OfferCard;

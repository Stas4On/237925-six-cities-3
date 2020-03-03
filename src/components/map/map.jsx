import React, {PureComponent} from "react";
import * as leaflet from "leaflet";
import types from "@/common/types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.coordinates = props.offers.map((offer) => offer.coordinates);
    this.mapRef = React.createRef();
    this.city = [52.38333, 4.9];
    this.zoom = 12;
    this.map = null;
  }

  componentDidMount() {
    if (this.mapRef.current) {
      this.map = leaflet.map(this.mapRef.current.id, {
        center: this.city,
        zoom: this.zoom,
        zoomControl: false,
        marker: true
      });
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      this.map.setView(this.city, this.zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      for (let cord of this.coordinates) {
        leaflet
          .marker(cord, {icon})
          .addTo(this.map);
      }
    }
  }

  render() {
    return (
      <div id="map" ref={this.mapRef} style={{height: `100%`}} />
    );
  }
}

Map.propTypes = {
  offers: types.offers
};

export default Map;

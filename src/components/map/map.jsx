import React, {PureComponent} from "react";
import * as leaflet from "leaflet";
import types from "@/common/types";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.mapConf = {
      city: [52.38333, 4.9],
      zoom: 12,
      iconSize: [30, 30],
      iconUrl: `img/pin.svg`,

    };
    this.map = null;
    this.layerGroupStorage = null;
    this.icon = leaflet.icon({
      iconUrl: this.mapConf.iconUrl,
      iconSize: this.mapConf.iconSize
    });
  }

  componentDidMount() {
    if (this.mapRef.current) {
      this.map = leaflet.map(this.mapRef.current.id, {
        center: this.mapConf.city,
        zoom: this.mapConf.zoom,
        zoomControl: false,
        marker: true
      });

      this.map.setView(this.mapConf.city, this.mapConf.zoom);

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);

      this.layerGroupStorage = {map: this.map, layerGroup: leaflet.layerGroup().addTo(this.map)};

      this.updateMap();
    }
  }

  componentDidUpdate() {
    const {layerGroup} = this.layerGroupStorage;
    this.map.setView(this.mapConf.city, this.mapConf.zoom);
    layerGroup.clearLayers();
    this.updateMap();
  }

  componentWillUnmount() {
    this.map = null;
  }

  getCords(offers) {
    return offers.map((offer) => offer.coordinates);
  }

  updateMap() {
    const coordinates = this.getCords(this.props.offers);
    const {layerGroup} = this.layerGroupStorage;
    const icon = this.icon;

    coordinates.forEach((cord) => {
      leaflet
        .marker(cord, {icon})
        .addTo(layerGroup);
    });
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

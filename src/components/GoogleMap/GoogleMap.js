import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 23.8103,
          lng: 90.4125,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyATHQM9YbO0YmqwYVORVKapPgixVzp2BhE",
})(MapContainer);
import React from "react";
import GoogleMapReact from 'google-map-react';

// Components
import Marker from './Marker';

function Googlemap ({ lat, lng }) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 11
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Googlemap;

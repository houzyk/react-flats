import React from "react";
import GoogleMapReact from 'google-map-react';

// Components
function Marker () {
  return <div className="marker" />;
}

function Googlemap ({ lat, lng }) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 10.99835602
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

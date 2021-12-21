import React, { Component } from "react";

// Components
import Googlemap from "./Googlemap";
import Flatlist from "./Flatlist";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  markerShow = (flatlat, flatlng) => {
    console.log(flatlat);
    this.setState(
      {
        lat: flatlat,
        lng: flatlng
      }
    );
  };

  render () {
    return (
      <div>
        <Flatlist markerShow={this.markerShow} />
        <Googlemap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;

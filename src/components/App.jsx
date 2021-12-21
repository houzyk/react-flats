import React, { Component } from "react";

// Components
import Googlemap from "./Googlemap";
import Flatlist from "./Flatlist";

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Flatlist />
        <Googlemap />
      </div>
    );
  }
}

export default App;

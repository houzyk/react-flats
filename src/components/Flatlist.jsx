import React from "react";

// Components
import Flat from "./Flat";

// data
import flats from '../../data/flats';

function Flatlist () {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat flat={flat} key={flat.lat + flat.lng} />)}
    </div>
  );
}

export default Flatlist;

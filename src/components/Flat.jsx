import React from "react";

function Flat ({ flat }) {
  const flatImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`;
  return (
    <div
      className="card"
      style={{ backgroundImage: flatImage }}
    >
      <div className="card-category">
        {`${flat.price} ${flat.priceCurrency}`}
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href="#"/>
    </div>
  );
}

export default Flat;

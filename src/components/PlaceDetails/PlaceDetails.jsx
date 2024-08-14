import React from "react";
import "./PlaceDetails.css";

const PlaceDetails = ({ place }) => {
  if (!place) {
    return null; // or some default content
  }

  return (
    <div className="card">
      {place.photo && place.photo.images && place.photo.images.large && (
        <img src={place.photo.images.large.url} alt={place.name} />
      )}
      <div className="title-card">{place.name}</div>
      <div className="info-row">
        <div className="label">Price</div>
        <div className="value">{place.price_level}</div>
      </div>
      <div className="info-row">
        <div className="label">Ranking</div>
        <div className="value">{place.ranking}</div>
      </div>
    </div>
  );
};

export default PlaceDetails;

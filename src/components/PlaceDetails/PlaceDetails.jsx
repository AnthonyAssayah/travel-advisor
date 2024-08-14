import React from "react";
import "./PlaceDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const PlaceDetails = ({ place }) => {
  if (!place || !place.name) {
    return null; // or some default content
  } else {
    return (
      <div className="card">
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : 'https://picsum.photos/250/250?random=1'
          }
          alt={place.name}
        />
        <div className="title-card">{place.name}</div>
        <div className="info-row">
          <div className="label">Price</div>
          <div className="value">{place.price_level}</div>
        </div>
        <div className="info-row">
          <div className="label">Ranking</div>
          <div className="value">{place.ranking}</div>
        </div>
        <div className="info-row">
          <div className="label">Rating</div>
          <div className="value">{place.rating}</div>
        </div>

        <div className="cuisine">
          {place?.cuisine?.map(({ name }, index) => (
            <div key={index} className="chip">
              {name}
            </div>
          ))}
        </div>
        <div className="info-row">
          <div className="label">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="value"> {place.address}</div>
        </div>
        <div className="info-row">
          <div className="label">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="value"> {place.phone}</div>
        </div>
        <button
          className="button button-tripadvisor"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </button>
        <button
          className="button button-website"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    );
  }
};

export default PlaceDetails;

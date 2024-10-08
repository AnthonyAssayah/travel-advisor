import React, { useState } from "react";
import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const getText = () => {
    switch (type) {
      case "Restaurants":
        return "Restaurants around you ..";
      case "Hotels":
        return "Hotels around you ..";
      case "Attractions":
        return "Attractions around you ..";
      default:
        return "Restaurants around you ..";
    }
  };

  // Filter places based on rating and price
  const filteredPlaces = places?.filter((place) => {
    const meetsRatingCriteria = rating
      ? parseFloat(place.rating) === parseFloat(rating)
      : true;
    const meetsPriceCriteria = price
      ? place.price_level === price
      : true;

    return meetsRatingCriteria && meetsPriceCriteria;
  });

  return (
    <div className="list">
      <div className="list-container">
        <p>{getText()}</p>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="Restaurants">Restaurant</option>
          <option value="Hotels">Hotels</option>
          <option value="Attractions">Attractions</option>
        </select>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="" disabled>
            Rating
          </option>
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
          <option value={5.0}>Above 5.0</option>
        </select>
        {type === "Restaurants" && (
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          >
            <option value="" disabled>
              Price
            </option>
            <option value={""}>All</option>
            <option value={"$"}>$</option>
            <option value={"$$ - $$$"}>$$-$$$</option>
            <option value={"$$$$"}>$$$$</option>
            
          </select>
        )}
        <div className="list-container-card">
          {filteredPlaces?.map((place, index) => (
            <div key={index}>
              <PlaceDetails place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;

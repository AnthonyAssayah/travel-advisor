import React, {useState} from "react";
import "./List.css";


const List = () => {

  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");

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
  }

  return (
    <div className="list">
      <div className="list-container">
        <p>{getText()}</p>
          <select value={type}  onChange={(e)=>setType(e.target.value)} required>
            <option value="Restaurants">Restaurant</option>
            <option value="Hotels">Hotels</option>
            <option value="Attractions">Attractions</option>
          </select>
          <select value={rating}  onChange={(e)=>setRating(e.target.value)} required>
            <option value="" disabled>
              Rating
            </option>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>

      </div>
    </div>
  );
};

export default List;

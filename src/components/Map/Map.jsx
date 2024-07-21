import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="map">
      <div className="map-container">
        <GoogleMapReact 
          bootstrapURLKeys={{ key: "AIzaSyCE-XaRxfJQyGEYry1xjZzTpFupf_oHjQ0" }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          yesIWantToUseGoogleMapApiInternals
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
          >
         
        
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;

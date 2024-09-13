import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";


const Map = ({setCoordinates, setBounds, coordinates}) => {

  return (
    <div className="map">
      <div className="map-container">
        <GoogleMapReact 
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={coordinates}
          defaultZoom={14}
          center={coordinates}
          yesIWantToUseGoogleMapApiInternals
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          
          }}
          onChildClick={""}
          >
         
        
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;

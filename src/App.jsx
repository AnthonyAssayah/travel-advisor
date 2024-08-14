import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { getPlacesData } from "./api";

const App = () => {

  const [places, getPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  },[])

  useEffect(() => {
    if (bounds && bounds.ne && bounds.sw) { // Check if bounds are defined
      console.log("Coordinates: ", coordinates);
      console.log("Bounds: ", bounds);

      // Call the API with proper bounds
      getPlacesData(bounds.ne, bounds.sw).then((data) => {
        console.log("Places Data: ", data);
        getPlaces(data); // Update the places state
      }).catch((error) => {
        console.error("Error fetching places data:", error);
      });
    }
  }, [coordinates, bounds]); // Dependency array includes coordinates and bounds

  return (
    <>
        <Header />
        <div className="main-container">
          <List places={places}/>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
        </div>
        <PlaceDetails />
    </>
  );
};

export default App;

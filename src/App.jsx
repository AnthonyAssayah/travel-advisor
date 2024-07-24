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
  })

  useEffect(() => { 
    console.log(coordinates, bounds)

    getPlacesData().then((data) => {
      console.log(data);
      getPlaces(data);
    })
    },[coordinates, bounds]);

  return (
    <>
        <Header />
        <div className="main-container">
          <List />
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates}/>
        </div>
        <PlaceDetails />
    </>
  );
};

export default App;

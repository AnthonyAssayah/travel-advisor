import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  return (
    <>
        <Header />
        <div className="main-container">
          <List />
          <Map />
        </div>
        <PlaceDetails />
    </>
  );
};

export default App;

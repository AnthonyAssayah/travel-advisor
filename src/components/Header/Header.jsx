import React from "react";
import "./Header.css";
// import {Autocomplete} from "@react-google-maps/api";
import logo from "../../assets/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="travel advisor" />
        <p className="title">Travel Advisor</p>
      </div>
      <div className="header-right">
        <p>Explore new places</p>
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Search..." className="search-input" />
          <div>
            <button className="login-button">sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

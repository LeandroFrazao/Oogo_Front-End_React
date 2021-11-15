import React from "react";
import "./body.css";
import logo from "../../assets/oogo-logo.svg";
import Home from "../home/Home";

const Body = () => {
  return (
    <div className="oogo__body section__margin" id="body">
      <div className="oogo__body-logo">
        <img src={logo} />
      </div>

      <div className="oogo__body-container">
        <Home />
      </div>
    </div>
  );
};

export default Body;

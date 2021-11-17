import React from "react";
import logo_hero from "../../assets/logo_hero.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="oogo__header section__padding" id="header">
      <div className="oogo__header-content">
        <h1 className="gradient__text">
          Find your Right-Fit childcare... every time
        </h1>
        <p>Because the kids are worth it (most of the time)</p>
      </div>

      <div className="oogo__header-image">
        <img src={logo_hero} alt="logo_hero" />
      </div>
    </div>
  );
};

export default Header;

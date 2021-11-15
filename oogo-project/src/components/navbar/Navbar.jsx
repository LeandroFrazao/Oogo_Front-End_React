import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/oogo-logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#application">Application</a>
    </p>
    <p>
      <a href="#profiles">Profiles</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="oogo__navbar">
      <div className="oogo__navbar-links">
        <div className="oogo__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="oogo__navbar-links_container">
          <Menu />
        </div>
        <div className="oogo__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="oogo__navbar-menu_container scale-up-center">
              <div className="oogo__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

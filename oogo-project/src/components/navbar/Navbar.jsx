import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/oogo-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ setPage, page }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = (props) => (
    <>
      <nav>
        <p>
          <NavLink to="/" onClick={() => setPage("home")}>
            Home
          </NavLink>
        </p>
      </nav>
      <nav>
        <p>
          <NavLink to="/application" onClick={() => setPage("application")}>
            Application
          </NavLink>
        </p>
      </nav>
      <nav>
        <p>
          <NavLink to="/profiles" onClick={() => setPage("profiles")}>
            Profiles
          </NavLink>
        </p>
      </nav>
    </>
  );

  return (
    <div className="oogo__navbar">
      <div className="oogo__navbar-links">
        <div className="oogo__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="oogo__navbar-links_container">
          <Menu props={page} />
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
                <Menu props={page} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

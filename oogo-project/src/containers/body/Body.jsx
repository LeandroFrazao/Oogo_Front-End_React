import React from "react";
import "./body.css";
import logo from "../../assets/oogo-logo.svg";

import { Application, Profiles, Home } from "..";

const Body = ({ setPage, page }) => {
  return (
    <div className="oogo__body section__margin" id="body">
      <div className="oogo__body-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="oogo__body-container">
        {page === "home" && (
          <>
            <Home setPage={setPage} />
          </>
        )}
        {page === "application" && (
          <>
            <Application setPage={setPage} />
          </>
        )}
        {page === "profiles" && (
          <>
            <Profiles setPage={setPage} />
          </>
        )}
        {console.log("body page:", page)}
      </div>
    </div>
  );
};

export default Body;

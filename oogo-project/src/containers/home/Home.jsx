import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Home = ({ setPage }) => {
  return (
    <div className="oogo__home">
      <div className="oogo__home-content">
        <NavLink to="/application">
          <Button type="button" onClick={() => setPage("application")}>
            Application
          </Button>
        </NavLink>
        <NavLink to="/application">
          <Button type="button" onClick={() => setPage("profiles")}>
            Profiles
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;

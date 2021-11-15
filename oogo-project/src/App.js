import React from "react";

import { Footer, Body, Header } from "./containers";
import { Navbar, Profiles, Application } from "./components";

import "./App.css";
import profiles from "./components/profiles/Profiles";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Body />

      <Footer />
    </div>
  );
};

export default App;

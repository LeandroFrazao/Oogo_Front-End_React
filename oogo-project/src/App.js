import React, { useState } from "react";

import { Footer, Body, Header } from "./containers";
import { Navbar } from "./components";

import "./App.css";

const App = ({ pageName }) => {
  const [page, setPage] = useState(pageName);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar setPage={setPage} page={page} />
        <Header />
      </div>
      <Body setPage={setPage} page={page} />

      <Footer />
    </div>
  );
};

export default App;

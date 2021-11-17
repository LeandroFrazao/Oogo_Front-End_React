import React, { useState } from "react";
import "./application.css";
import { Userdetail, Location, Experience, UploadFiles } from "../application";

const Application = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    name: "teste",
    typeService: "",
    address: "",
    town: "",
    country: "",
    yearsExp: "",
    certNames: [],
    certFiles: [],
    picture: "",
  });
  const values = ["User Detail", "Location", "Experience", "Files"];

  const nextPage = () => {
    return setPage((page) => page + 1);
  };
  const previousPage = () => {
    return setPage((page) => page - 1);
  };
  const updateData = (type) => (e) => {
    setData((newData) => {
      return { ...newData, [type]: e.target.value };
    });
  };

  return (
    <div className="oogo__application">
      <div>
        {page === 1 && <Userdetail data={data} update={updateData} />}
        {page === 2 && <Location data={data} update={updateData} />}
        {page === 3 && <Experience data={data} update={updateData} />}
        {page === 4 && <UploadFiles data={data} update={updateData} />}
      </div>
      <div className="oogo__application_content">
        <div className="oogo__application-navigation">
          <p> {values[page - 1]}</p>
          <div className="oogo__application-navigation-previous">
            {page !== 1 && <button onClick={previousPage}>Previus</button>}
          </div>
          <div className="oogo__application-navigation-next">
            {" "}
            {page !== 4 && <button onClick={nextPage}>Next</button>}
          </div>
        </div>
        <div className="oogo__application-input">
          <input type="submit" value="Submit" />
        </div>
      </div>
      <div className="oogo_application-progress">
        <progress max="4" value={page} />
      </div>
    </div>
  );
};

export default Application;

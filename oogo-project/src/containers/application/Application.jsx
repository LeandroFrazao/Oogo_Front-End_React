import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./application.css";
import { Userdetail, Location, Experience, UploadFiles } from "../application";

const Application = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    name: "",
    typeService: "",
    address: "",
    town: "",
    country: "",
    yearsExp: "",
    certNames: "",
    certFiles: "",
    picture: "",
  });
  const values = ["User Detail", "Location", "Experience", "Files"];

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (e) => {
    window.alert(JSON.stringify(data, null, 2));
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setUser(json.data));
  };

  const nextPage = () => {
    return setPage((page) => page + 1);
  };
  const previousPage = () => {
    return setPage((page) => page - 1);
  };
  const updateData = (type) => (e) => {
    setData((oldData) => {
      return { ...oldData, [type]: e.target.value };
    });
  };

  return (
    <div className="oogo__application">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="oogo__application-forms">
          {page === 1 && (
            <Userdetail
              data={data}
              update={updateData}
              register={register}
              errors={errors}
            />
          )}
          {page === 2 && (
            <Location
              data={data}
              update={updateData}
              register={register}
              errors={errors}
            />
          )}
          {page === 3 && (
            <Experience
              data={data}
              update={updateData}
              register={register}
              errors={errors}
            />
          )}
          {page === 4 && (
            <UploadFiles
              data={data}
              update={updateData}
              register={register}
              errors={errors}
            />
          )}
        </div>
        <div className="oogo__application_content">
          <div className="oogo__application-navigation">
            <p> {values[page - 1]}</p>
            <div className="oogo__application-navigation-previous">
              {page !== 1 && (
                <button type="button" onClick={previousPage}>
                  Previus
                </button>
              )}
            </div>
            <div className="oogo__application-navigation-next">
              {page !== 4 && (
                <button type="button" onClick={nextPage}>
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="oogo__application-input">
            <input type="submit" value="Submit" disable={!isValid} />
          </div>
        </div>
        <div className="oogo_application-progress">
          <progress max="4" value={page} />
        </div>
        <div>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
          <pre>{errors.name && errors.name.message}</pre>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      </form>
    </div>
  );
};

export default Application;

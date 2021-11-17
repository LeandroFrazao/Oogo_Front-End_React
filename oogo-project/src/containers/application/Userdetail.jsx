import React from "react";
import "./userdetail.css";

const Userdetail = ({ data, update, register, errors }) => {
  return (
    <div className="oogo__userdetail">
      <div className="oogo__userdetail_content">
        <h2>Become a Minder</h2>
        <h3>We are excited to welcome you to öogo</h3>
        <p>
          As you complete your sign up process, ask us questions anytime by
          using our chat box below. Typical time for completion is around 5
          minutes.
        </p>
      </div>
      <div className="oogo__userdetail_form">
        <div className="oogo__userdetail_form-input">
          <label>What should we call you?</label>
          <input
            type="text"
            id="firstName"
            name="name"
            placeholder="e.g. Wally Michael"
            {...register("name", {
              required: {
                value: true,
                message: "Please type your name",
              },
            })}
            onChange={update("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <label>Type of service</label>
          <input
            type="text"
            id="typeService"
            name="typeService"
            placeholder="e.g. Activity Based Childcare"
            {...register("typeService", {
              required: {
                value: true,
                message: "Please enter your service type",
              },
            })}
            onChange={update("typeService")}
          />
          {errors.typeService && <p>{errors.typeService.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Userdetail;
